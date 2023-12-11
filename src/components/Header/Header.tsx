import { type JSX, MouseEvent, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import {
  Alert,
  AppBar,
  Button,
  Snackbar,
  ToggleButton,
  ToggleButtonGroup,
  useScrollTrigger,
} from '@mui/material';
import { Stack } from '@mui/system';
import { signOut } from 'firebase/auth';

import { auth } from '@/config/firebase';
import { I18NLanguage } from '@/config/i18n';
import { AuthState, useAuth } from '@/features/auth';
import { useI18NContext } from '@/providers/i18n';

export const Header = (): JSX.Element => {
  const { language, setLanguage, translate } = useI18NContext();
  const [localLanguage, setLocalLanguage] = useState<string>(language);
  const [alertType, setAlertType] = useState<'error' | 'success' | null>(null);
  const [alertText, setAlertText] = useState('');
  const { authState } = useAuth();

  const navigate = useNavigate();

  const handleToggleLanguage = (_: MouseEvent<HTMLElement>, nextLanguage: string): void => {
    if (nextLanguage !== null) {
      setLocalLanguage(nextLanguage);
    }
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
    <AppBar
      sx={{
        alignItems: 'center',
        backgroundColor: useScrollTrigger() ? 'background.paper' : 'primary.main',
        justifyContent: 'center',
        minHeight: '5vh',
        position: 'sticky',
        top: 0,
      }}
    >
      <Stack direction="row" justifyContent={'space-between'} width={'95%'}>
        <Button
          component={RouterLink}
          sx={{
            backgroundColor: 'text.primary',
            color: 'primary.main',
            textDecoration: 'none',
          }}
          to="/"
        >
          {translate('welcomePage')}
        </Button>

        <Stack direction={'row'} justifyContent={'space-between'} width={'20%'}>
          {authState === AuthState.AUTHENTICATED && (
            <Button
              onClick={signOutUser}
              sx={{ backgroundColor: 'text.primary', color: 'primary.main' }}
              variant="outlined"
            >
              {translate('signOut')}
            </Button>
          )}
          <ToggleButtonGroup
            aria-label="Interface Language"
            exclusive
            onChange={handleToggleLanguage}
            sx={{ backgroundColor: 'primary.main' }}
            value={localLanguage}
          >
            <ToggleButton
              aria-label="English"
              onClick={() => setLanguage(I18NLanguage.English)}
              sx={{
                backgroundColor: 'text.primary',
                color: 'primary.main',
              }}
              value={'en'}
            >
              {translate('switchToEN')}
            </ToggleButton>
            <ToggleButton
              aria-label="Russian"
              onClick={() => setLanguage(I18NLanguage.Russian)}
              sx={{
                backgroundColor: 'text.primary',
                color: 'primary.main',
              }}
              value={'ru'}
            >
              {translate('switchToRU')}
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
      <Snackbar autoHideDuration={3000} onClose={() => setAlertType(null)} open={!!alertType}>
        <Alert severity={alertType || 'success'} sx={{ width: '100%' }}>
          {alertText}
        </Alert>
      </Snackbar>
    </AppBar>
  );
};
