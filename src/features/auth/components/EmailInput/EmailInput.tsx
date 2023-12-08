import { JSX } from 'react';
import { Control, Controller } from 'react-hook-form';

import TextField from '@mui/material/TextField';

import { useI18NContext } from '@/providers/i18n';

import { AuthFormData } from '../../types';
import { getEmailRules } from '../../utils/validation-rules';

function EmailInput({ control }: { control: Control<AuthFormData> }): JSX.Element {
  const { translate } = useI18NContext();

  const emailWord = translate('email');

  return (
    <Controller
      control={control}
      name="email"
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          aria-invalid={!!error}
          autoComplete={'email'}
          error={!!error}
          helperText={error?.message}
          label={emailWord}
          placeholder={emailWord}
          required
          size="small"
        />
      )}
      rules={getEmailRules(translate('requiredError'), translate('invalidEmail'))}
    />
  );
}

export { EmailInput };
