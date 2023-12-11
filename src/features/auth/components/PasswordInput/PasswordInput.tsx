import type { JSX } from 'react';
import { useState } from 'react';
import { Control, Controller } from 'react-hook-form';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';

import { useI18NContext } from '@/providers/i18n';

import { AuthFormData } from '../../types';
import { getPasswordRules } from '../../utils/validation-rules';

const PasswordInput = ({ control }: { control: Control<AuthFormData> }): JSX.Element => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { translate } = useI18NContext();

  const label = translate('password');

  const validationRules = getPasswordRules(
    translate('requiredError'),
    translate('shortPassword'),
    translate('weakPassword'),
  );

  return (
    <Controller
      control={control}
      name="password"
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
};

export { PasswordInput };
