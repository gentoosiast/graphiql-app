import { useState } from 'react';
import type { JSX, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import { Alert, AppBar, Button, Menu, MenuItem, Snackbar, useScrollTrigger } from '@mui/material';
import { Stack } from '@mui/system';
import { signOut } from 'firebase/auth';

import { auth } from '@/config/firebase';
import { I18NLanguage } from '@/config/i18n';
import { useI18NContext } from '@/contexts/i18n';
import { AuthState, useAuth } from '@/features/auth';

import { LogoLink } from '../LogoLink';

export const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const { language, setLanguage, translate } = useI18NContext();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [alertType, setAlertType] = useState<'error' | 'success' | null>(null);
  const [alertText, setAlertText] = useState('');
  const { authState } = useAuth();

  const isLanguageMenuOpen = Boolean(anchorEl);

  const handleLanguageButtonClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = (lang?: I18NLanguage): void => {
    if (lang) {
      setLanguage(lang);
    }

    setAnchorEl(null);
  };

  const signOutUser = async (): Promise<void> => {
    try {
      await signOut(auth);

      setAlertType('success');
      setAlertText(translate('signOutSuccess'));
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      setAlertType('error');
      setAlertText(translate('defaultError'));
      console.error(error);
    }
  };

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
          <LogoLink />
        </Stack>

        <Stack direction={'row'} justifyContent={'space-between'} width={'20%'}>
          {authState === AuthState.AUTHENTICATED && (
            <Button
              color="inherit"
              onClick={() => void signOutUser()}
              sx={{ backgroundColor: 'primary.light' }}
              variant="outlined"
            >
              {translate('signOut')}
            </Button>
          )}

          <Button
            aria-controls={isLanguageMenuOpen ? 'language-menu' : undefined}
            aria-expanded={isLanguageMenuOpen ? 'true' : undefined}
            aria-haspopup="true"
            aria-label="select UI language"
            id="language-button"
            onClick={handleLanguageButtonClick}
            startIcon={<TranslateOutlinedIcon />}
            variant="contained"
          >
            {language}
          </Button>
          <Menu
            MenuListProps={{
              'aria-labelledby': 'language-button',
            }}
            anchorEl={anchorEl}
            disableScrollLock={true}
            id="language-menu"
            onClose={() => handleLanguageMenuClose()}
            open={isLanguageMenuOpen}
          >
            <MenuItem
              onClick={() => {
                handleLanguageMenuClose(I18NLanguage.English);
              }}
            >
              English
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleLanguageMenuClose(I18NLanguage.Russian);
              }}
            >
              Русский
            </MenuItem>
          </Menu>
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
