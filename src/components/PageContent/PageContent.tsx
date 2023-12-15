import type { JSX } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/system';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '@/config/firebase';
import { removeUser, setUser } from '@/features/users';

const PageContent = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ email: user.email ?? '' }));
      } else {
        dispatch(removeUser());
      }
    });
  }, [dispatch]);

  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Outlet />
    </Box>
  );
};

export { PageContent };
