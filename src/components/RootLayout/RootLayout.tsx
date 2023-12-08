import type { JSX } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export const RootLayout = (): JSX.Element => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main>
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Outlet />
          </Box>
        </main>
        <Footer />
      </Box>
    </>
  );
};
