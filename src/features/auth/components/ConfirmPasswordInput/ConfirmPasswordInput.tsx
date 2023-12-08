import { JSX, useState } from 'react';
import { Control, Controller } from 'react-hook-form';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';

import { useI18NContext } from '@/providers/i18n';

import { AuthFormData } from '../../types';
import { getConfirmPasswordRules } from '../../utils/validation-rules';

type PasswordInputProps = {
  control: Control<AuthFormData>;
  passwordValue: string;
};

function ConfirmPasswordInput({ control, passwordValue }: PasswordInputProps): JSX.Element {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { translate } = useI18NContext();

  const label = translate('confirmPassword');

  const validationRules = getConfirmPasswordRules(
    passwordValue,
    translate('requiredError'),
    translate('notMatch'),
  );

  return (
    <Controller
      control={control}
      name="confirmPassword"
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  size="small"
                >
                  {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          aria-invalid={!!error}
          autoComplete={'password'}
          error={!!error}
          helperText={error?.message}
          label={label}
          placeholder={label}
          required
          size="small"
          type={isPasswordVisible ? 'text' : 'password'}
        />
      )}
      rules={validationRules}
    />
  );
}

export { ConfirmPasswordInput };
