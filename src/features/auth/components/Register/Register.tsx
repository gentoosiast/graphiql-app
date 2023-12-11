import type { Dispatch, FormEvent, JSX, SetStateAction } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Alert, Button, Snackbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { FirebaseError } from 'firebase/app';
import { AuthErrorCodes, createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@/config/firebase';
import { useI18NContext } from '@/providers/i18n';

import { type AuthFormData } from '../../types';
import { AuthForm } from '../AuthForm';

type Props = {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
};

const Register = ({ setIsLogin }: Props): JSX.Element => {
  const navigate = useNavigate();

  const [alertType, setAlertType] = useState<'error' | 'success' | null>(null);
  const [alertText, setAlertText] = useState('');

  const { translate } = useI18NContext();

  const text = {
    prompt: translate('haveAccount'),
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
      confirmPassword: '',
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = async ({ email, password }: AuthFormData): Promise<void> => {
    if (!isValid) {
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      setAlertType('success');
      setAlertText(translate('registerSuccess'));
      setTimeout(() => navigate('/main'), 2000);
    } catch (err) {
      if (err instanceof FirebaseError && err.code === AuthErrorCodes.EMAIL_EXISTS) {
        setAlertText(translate('accoutExistsError'));
      } else {
        setAlertText(translate('defaultError'));
        console.error(err);
      }
      setAlertType('error');
    }
  };

  return (
    <>
      <Container maxWidth="xs">
        <AuthForm
          control={control}
          isLogin={false}
          isValid={isValid}
          submit={(e: FormEvent) => void handleSubmit(onSubmit)(e)}
          title={text.signUp}
          watch={watch}
        />
        <Typography align="center" sx={{ mt: 3 }}>
          {text.prompt} <Button onClick={() => setIsLogin(true)}>{text.signIn}</Button>
        </Typography>
      </Container>

      <Snackbar autoHideDuration={3000} onClose={() => setAlertType(null)} open={!!alertType}>
        <Alert severity={alertType || 'error'} sx={{ width: '100%' }}>
          {alertText}
        </Alert>
      </Snackbar>
    </>
  );
};

export { Register };
