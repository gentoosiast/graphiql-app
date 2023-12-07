import { JSX, useState } from 'react';
import { Control, Controller } from 'react-hook-form';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';

import { useI18NContext } from '@/providers/i18n';

import { AuthFormData } from '../../routes/AuthPage';
import { getPasswordRules } from '../../utils/validation-rules';

function PasswordInput({ control }: { control: Control<AuthFormData> }): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);

  const { translate } = useI18NContext();

  const passwordWord = translate('password');

  const passwordRules = getPasswordRules(
    translate('requiredError'),
    translate('shortPassword'),
    translate('weakPassword'),
  );

  return (
    <Controller
      control={control}
      name="password"
      render={({ field: { name, onBlur, onChange }, fieldState: { error } }) => (
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={() => setShowPassword(!showPassword)}
                  size="small"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          autoComplete={'password'}
          defaultValue={''}
          error={!!error}
          helperText={error?.message}
          label={passwordWord}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={passwordWord}
          size="small"
          type={showPassword ? 'text' : 'password'}
        />
      )}
      rules={passwordRules}
    />
  );
}

export { PasswordInput };
