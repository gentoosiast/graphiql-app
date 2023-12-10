import { useSelector } from 'react-redux';

import { RootState } from '@/store';

import { AuthState } from '../enums';

type UseAuth = {
  authState: AuthState;
  email: string;
};

function useAuth(): UseAuth {
  const email = useSelector((state: RootState) => state.user.email);
  const authState = useSelector((state: RootState) => state.user.authState);

  return {
    authState,
    email,
  };
}

export { useAuth };
