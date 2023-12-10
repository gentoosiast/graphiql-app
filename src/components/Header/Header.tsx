import { type JSX, MouseEvent, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { Alert, AppBar, Button, Snackbar, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Stack } from '@mui/system';
import { signOut } from 'firebase/auth';

import { auth } from '@/config/firebase';
import { I18NLanguage } from '@/config/i18n';
import { AuthState, useAuth } from '@/features/auth';
import { useI18NContext } from '@/providers/i18n';

export const Header = (): JSX.Element => {
  const { setLanguage, translate } = useI18NContext();
  const [localLanguage, setLocalLanguage] = useState('EN');
  const [alertType, setAlertType] = useState<'error' | 'success' | null>(null);
  const [alertText, setAlertText] = useState('');
  const { authState } = useAuth();

  const navigate = useNavigate();

  const handleToggleLanguage = (_: MouseEvent<HTMLElement>, nextLanguage: string): void => {
    setLocalLanguage(nextLanguage);
  };

  function signOutUser(): void {
    signOut(auth)
      .then(() => {
        setAlertType('success');
        setAlertText(translate('signOutSuccess'));
        setTimeout(() => navigate('/'), 2000);
      })
      .catch((error) => {
        setAlertType('error');
        setAlertText(translate('defaultError'));
        console.error(error);
      });
  }

  return (
    <>
      {authState === AuthState.AUTHENTICATED && (
        <Button onClick={signOutUser} variant="outlined">
          {translate('signOut')}
        </Button>
      )}

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

      <Snackbar autoHideDuration={3000} onClose={() => setAlertType(null)} open={!!alertType}>
        <Alert severity={alertType || 'success'} sx={{ width: '100%' }}>
          {alertText}
        </Alert>
      </Snackbar>
    </>
  );
};
