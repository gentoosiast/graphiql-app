import type { FormEventHandler, JSX } from 'react';
import type { Control, UseFormWatch } from 'react-hook-form';

import { Button, Stack, Typography } from '@mui/material';

import { type AuthFormData } from '../../types';
import { ConfirmPasswordInput } from '../ConfirmPasswordInput';
import { EmailInput } from '../EmailInput';
import { PasswordInput } from '../PasswordInput';

type Props = {
  control: Control<AuthFormData>;
  isLogin: boolean;
  isValid: boolean;
  submit: FormEventHandler<HTMLFormElement>;
  title: string;
  watch?: UseFormWatch<AuthFormData>;
};

function AuthForm(props: Props): JSX.Element {
  const { control, isLogin, isValid, submit, title, watch } = props;

  return (
    <>
      <Typography component="h1" mb={4} mt={7} textAlign="center" variant="h2">
        {title}
      </Typography>
      <form onSubmit={submit}>
        <Stack spacing={2}>
          <EmailInput control={control} />
          <PasswordInput control={control} />
          {!isLogin && watch && (
            <ConfirmPasswordInput control={control} passwordValue={watch('password')} />
          )}
          <Button disabled={!isValid} size="large" type="submit" variant="contained">
            {title}
          </Button>
        </Stack>
      </form>
    </>
  );
}

export { AuthForm };
