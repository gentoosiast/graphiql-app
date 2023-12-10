import type { JSX, MouseEvent } from 'react';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { AppBar, Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Stack } from '@mui/system';

import { I18NLanguage } from '@/config/i18n';
import { useI18NContext } from '@/providers/i18n';

export const Header = (): JSX.Element => {
  const { setLanguage, translate } = useI18NContext();
  const [localLanguage, setLocalLanguage] = useState('EN');

  const handleToggleLanguage = (_: MouseEvent<HTMLElement>, nextLanguage: string): void => {
    setLocalLanguage(nextLanguage);
  };

  return (
    <AppBar
      sx={{
        alignItems: 'center',
        backgroundColor: 'primary.main',
        justifyContent: 'center',
        minHeight: 60,
        position: 'sticky',
        top: 0,
      }}
    >
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="Interface Language"
          exclusive
          onChange={handleToggleLanguage}
          value={localLanguage}
        >
          <ToggleButton
            aria-label="English"
            color="secondary"
            onClick={() => setLanguage(I18NLanguage.English)}
            value={'en'}
          >
            {translate('switchToEN')}
          </ToggleButton>
          <ToggleButton
            aria-label="Russian"
            color="secondary"
            onClick={() => setLanguage(I18NLanguage.Russian)}
            value={'ru'}
          >
            {translate('switchToRU')}
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Button
        component={RouterLink}
        sx={{ backgroundColor: 'primary.main', color: 'secondary.main', textDecoration: 'none' }}
        to="/"
      >
        {translate('welcomePage')}
      </Button>
    </AppBar>
  );
};
