import type { PropsWithChildren, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';

import { AuthState, useAuth } from '@/features/auth';

export const PrivateRouteGuard = ({ children }: PropsWithChildren): ReactNode => {
  const { authState } = useAuth();

  if (authState === AuthState.PENDING) {
    return (
      <Box
        sx={{
          left: '50%',
          position: 'absolute',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

  if (authState === AuthState.NOT_AUTHENTICATED) {
    return <Navigate replace to="/" />;
  }

  return children;
};
