import type { JSX } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/system';

const PageContent = (): JSX.Element => {
  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Outlet />
    </Box>
  );
};

export { PageContent };
