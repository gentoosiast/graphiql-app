import type { JSX } from 'react';
import { Suspense, useEffect } from 'react';

import { Box, CircularProgress } from '@mui/material';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '@/config/firebase';
import { setUser } from '@/features/users';
import { setAuthState, useAppDispatch } from '@/store';

import { Footer } from '../Footer';
import { Header } from '../Header';
import { PageContent } from '../PageContent';

export const RootLayout = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      const authState = user ? 'AUTHENTICATED' : 'UNAUTHENTICATED';

      dispatch(setAuthState(authState));
      dispatch(setUser({ email: user?.email ?? null }));
    });

    return () => {
      unsub();
    };
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Suspense
        fallback={
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <CircularProgress
              color="primary"
              sx={{
                left: '50%',
                position: 'absolute',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </Box>
        }
      >
        <PageContent />
      </Suspense>
      <Footer />
    </Box>
  );
};
