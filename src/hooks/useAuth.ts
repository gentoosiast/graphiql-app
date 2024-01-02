import type { AuthState } from '@/types';

import { useAppSelector } from '@/store';

export const useAuth = (): AuthState => {
  const authState = useAppSelector((state) => state.auth.authState);

  return authState;
};
