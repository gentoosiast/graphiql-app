import { type JSX, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button, Container, Stack, Typography } from '@mui/material';

import { useI18NContext } from '@/providers/i18n';

import { EmailInput, PasswordInput } from '../components';

export type AuthFormData = {
  confirmPassword?: string;
  email: string;
  password: string;
  test: string;
};

export const AuthPage = (): JSX.Element => {
  const [isLogin, setIsLogin] = useState(true);

  const { translate } = useI18NContext();

  const signInText = translate('signIn');
  const signUpText = translate('signUp');

  const title = isLogin ? signInText : signUpText;
  const prompt = isLogin ? translate('noAccount') : translate('haveAccount');

  const navigate = useNavigate();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<AuthFormData>({
    mode: 'onBlur',
  });

  function onSubmit(): void {
    const isFormValid = Object.keys(errors).length === 0;

    if (!isFormValid) {
      return;
    }
    navigate('/');
  }

  return (
    <>
      <Typography component="h1" mb={4} mt={7} textAlign="center" variant="h2">
        {title}
      </Typography>
      <form onSubmit={(e) => void handleSubmit(onSubmit)(e)}>
        <Container maxWidth="xs">
          <Stack spacing={2}>
            <EmailInput control={control} />
            <PasswordInput control={control} />
            <Button size="large" type="submit" variant="contained">
              {title}
            </Button>
            <Typography align="center">
              {prompt}{' '}
              <Button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? signUpText : signInText}
              </Button>
            </Typography>
          </Stack>
        </Container>
      </form>
    </>
  );
};
