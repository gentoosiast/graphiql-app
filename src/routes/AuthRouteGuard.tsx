import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';

import type { AuthState } from '@/types';

import { useAuth } from '@/hooks';

type Props = {
  authRejectStatus: AuthState;
  children: ReactNode;
  rejectRoute: string;
};

export const AuthRouteGuard = ({ authRejectStatus, children, rejectRoute }: Props): ReactNode => {
  const authState = useAuth();

  if (authState === 'PENDING') {
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

  if (authState === authRejectStatus) {
    return <Navigate replace={true} to={rejectRoute} />;
  }

  return children;
};
