import { useState } from 'react';
import type { JSX } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import { Alert, AppBar, Button, MenuItem, Select, Snackbar, useScrollTrigger } from '@mui/material';
import { Stack } from '@mui/system';
import { signOut } from 'firebase/auth';

import { auth } from '@/config/firebase';
import { I18NLanguage } from '@/config/i18n';
import { AuthState, useAuth } from '@/features/auth';
import { useI18NContext } from '@/providers/i18n';

import { FaviconSvg } from '../favicon';

export const Header = (): JSX.Element => {
  const { language, setLanguage, translate } = useI18NContext();
  const [alertType, setAlertType] = useState<'error' | 'success' | null>(null);
  const [alertText, setAlertText] = useState('');
  const { authState } = useAuth();

  const navigate = useNavigate();

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

          <Select label={language} value={language}>
            <MenuItem
              onClick={() => {
                setLanguage(I18NLanguage.English);
              }}
              value={I18NLanguage.English}
            >
              <TranslateOutlinedIcon sx={{ margin: 0.5 }} />
              {I18NLanguage.English}
            </MenuItem>
            <MenuItem
              onClick={() => setLanguage(I18NLanguage.Russian)}
              value={I18NLanguage.Russian}
            >
              <TranslateOutlinedIcon sx={{ margin: 0.5 }} />
              {I18NLanguage.Russian}
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
