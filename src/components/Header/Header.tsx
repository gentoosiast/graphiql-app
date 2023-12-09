import { type JSX, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Alert, Button, Snackbar } from '@mui/material';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import { auth } from '@/config/firebase';
import { useI18NContext } from '@/providers/i18n';

export const Header = (): JSX.Element => {
  const [alertType, setAlertType] = useState<'error' | 'success' | null>(null);
  const [alertText, setAlertText] = useState('');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const { translate } = useI18NContext();

  const navigate = useNavigate();

  useEffect(() => onAuthStateChanged(auth, (user) => setIsUserLoggedIn(!!user)), []);

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
      <header>
        <h1>Header</h1>

        {isUserLoggedIn && (
          <Button onClick={signOutUser} variant="outlined">
            {translate('signOut')}
          </Button>
        )}
      </header>

      <Snackbar autoHideDuration={3000} onClose={() => setAlertType(null)} open={!!alertType}>
        <Alert severity={alertType || 'success'} sx={{ width: '100%' }}>
          {alertText}
        </Alert>
      </Snackbar>
    </>
  );
};
