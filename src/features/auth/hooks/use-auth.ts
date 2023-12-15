import { useAppSelector } from '@/store';

import { AuthState } from '../enums';

type UseAuth = {
  authState: AuthState;
  email: string;
};

const useAuth = (): UseAuth => {
  const email = useAppSelector((state) => state.user.email);
  const authState = useAppSelector((state) => state.user.authState);

  return {
    authState,
    email,
  };
};

export { useAuth };
