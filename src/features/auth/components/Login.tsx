import { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Alert, Button, Snackbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { FirebaseError } from 'firebase/app';
import { AuthErrorCodes, signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@/config/firebase';
import { useI18NContext } from '@/providers/i18n';

import { AuthFormData } from '../types';
import { AuthForm } from './AuthForm';

type Props = {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

function Login({ setIsLogin }: Props): JSX.Element {
  const navigate = useNavigate();

  const [alertType, setAlertType] = useState<'error' | 'success' | null>(null);
  const [alertText, setAlertText] = useState('');

  const { translate } = useI18NContext();

  const text = {
    prompt: translate('noAccount'),
    signIn: translate('signIn'),
    signUp: translate('signUp'),
  };

  const {
    control,
    formState: { isValid },
    handleSubmit,
    watch,
  } = useForm<AuthFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  function onSubmit(data: AuthFormData): void {
    if (!isValid) {
      return;
    }
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        setAlertType('success');
        setAlertText(translate('loginSuccess'));
        setTimeout(() => navigate('/main'), 2000);
      })
      .catch((err) => {
        if (err instanceof FirebaseError && err.code === AuthErrorCodes.INVALID_IDP_RESPONSE) {
          setAlertText(translate('accoutNotFound'));
        } else {
          setAlertText(translate('defaultError'));
          console.error(err);
        }
        setAlertType('error');
      });
  }

  return (
    <>
      <Container maxWidth="xs">
        <AuthForm
          control={control}
          isLogin={true}
          isValid={isValid}
          submit={(e: FormEvent) => void handleSubmit(onSubmit)(e)}
          title={text.signIn}
          watch={watch}
        />
        <Typography align="center" sx={{ mt: 3 }}>
          {text.prompt} <Button onClick={() => setIsLogin(false)}>{text.signUp}</Button>
        </Typography>
      </Container>

      <Snackbar autoHideDuration={3000} onClose={() => setAlertType(null)} open={!!alertType}>
        <Alert severity={alertType || 'error'} sx={{ width: '100%' }}>
          {alertText}
        </Alert>
      </Snackbar>
    </>
  );
}

export { Login };
