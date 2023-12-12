import { useState } from 'react';
import type { JSX } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import {
  Alert,
  AppBar,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Snackbar,
  useScrollTrigger,
} from '@mui/material';
import { Stack } from '@mui/system';
import { signOut } from 'firebase/auth';

import { auth } from '@/config/firebase';
import { I18NLanguage } from '@/config/i18n';
import { AuthState, useAuth } from '@/features/auth';
import { useI18NContext } from '@/providers/i18n';

import { FaviconSvg } from '../favicon';

export const Header = (): JSX.Element => {
  const { language, setLanguage, translate } = useI18NContext();
  const [localLanguage, setLocalLanguage] = useState<string>(language);
  const [alertType, setAlertType] = useState<'error' | 'success' | null>(null);
  const [alertText, setAlertText] = useState('');
  const { authState } = useAuth();

  const navigate = useNavigate();

  const handleToggleLanguage = (event: SelectChangeEvent): void => {
    const nextLanguage = event.target.value;
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
        padding: 1,
        position: 'sticky',
        top: 0,
      }}
    >
      <Stack direction="row" justifyContent={'space-between'} width={'95%'}>
        <Stack alignItems="center" borderRadius={20} justifyContent="center" width="10%">
          <RouterLink to="/">
            <FaviconSvg />
          </RouterLink>
        </Stack>

        <Stack direction={'row'} justifyContent={'space-between'} width={'20%'}>
          {authState === AuthState.AUTHENTICATED && (
            <Button
              color="inherit"
              onClick={signOutUser}
              sx={{ backgroundColor: 'primary.light' }}
              variant="outlined"
            >
              {translate('signOut')}
            </Button>
          )}

          <Select label={localLanguage} onChange={handleToggleLanguage} value={localLanguage}>
            <MenuItem
              onClick={() => {
                setLanguage(I18NLanguage.English);
              }}
              value={'en'}
            >
              <TranslateOutlinedIcon />
              en
            </MenuItem>
            <MenuItem onClick={() => setLanguage(I18NLanguage.Russian)} value={'ru'}>
              <TranslateOutlinedIcon />
              ru
            </MenuItem>
          </Select>
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
