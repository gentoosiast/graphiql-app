import { JSX } from 'react';
import { Control, Controller } from 'react-hook-form';

import TextField from '@mui/material/TextField';

import { useI18NContext } from '@/providers/i18n';

import { AuthFormData } from '../../routes/AuthPage';
import { getEmailRules } from '../../utils/validation-rules';

function EmailInput({ control }: { control: Control<AuthFormData> }): JSX.Element {
  const { translate } = useI18NContext();

  const emailWord = translate('email');

  return (
    <Controller
      control={control}
      name="email"
      render={({ field: { name, onBlur, onChange }, fieldState: { error } }) => (
        <TextField
          autoComplete={'email'}
          defaultValue={''}
          error={!!error}
          helperText={error?.message}
          label={emailWord}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={emailWord}
          size="small"
        />
      )}
      rules={getEmailRules(translate('requiredError'), translate('invalidEmail'))}
    />
  );
}

export { EmailInput };
