import { type JSX } from 'react';

import { Box } from '@mui/material';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import { PageContent } from '../PageContent';

export const RootLayout = (): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <PageContent />
      <Footer />
    </Box>
  );
};
