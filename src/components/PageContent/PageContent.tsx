import type { JSX } from 'react';
import { useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/system';
import { suspend } from 'suspend-react';

import { setUser } from '@/features/users';
import { useAppDispatch } from '@/store';

import { getInitialAuthState } from './getInitialAuthState';

const PageContent = (): JSX.Element => {
  const user = suspend(getInitialAuthState, ['initialAuthState']);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(setUser({ email: user?.email ?? null }));
  }, [user, dispatch]);

  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Outlet />
    </Box>
  );
};

export { PageContent };
