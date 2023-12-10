import type { JSX } from 'react';
import { Link } from 'react-router-dom';

import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Stack } from '@mui/system';

import { I18NLanguage } from '@/config/i18n';
import { useI18NContext } from '@/providers/i18n';

export const Header = (): JSX.Element => {
  const { setLanguage, translate } = useI18NContext();

  return (
    <header style={{}}>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: 'primary.main', minHeight: 60, position: 'sticky', top: 0 }}
      >
        <Stack direction="row">
          <ToggleButtonGroup>
            <ToggleButton
              color="secondary"
              onClick={() => setLanguage(I18NLanguage.English)}
              value={'EN'}
            >
              {translate('switchToEN')}
            </ToggleButton>
            <ToggleButton onClick={() => setLanguage(I18NLanguage.Russian)} value={'RU'}>
              {translate('switchToRU')}
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Stack sx={{ backgroundColor: 'primary.main', textDecoration: 'none' }}>
          <Link to="/">Welcome page</Link>
        </Stack>
      </Stack>
    </header>
  );
};
