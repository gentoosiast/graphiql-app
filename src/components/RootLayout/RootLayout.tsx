import type { JSX } from 'react';
import { Suspense } from 'react';

import { Box, CircularProgress } from '@mui/material';

import { Footer } from '../Footer';
import { Header } from '../Header';
import { PageContent } from '../PageContent';

export const RootLayout = (): JSX.Element => {
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
