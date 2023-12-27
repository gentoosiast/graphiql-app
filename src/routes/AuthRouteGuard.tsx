import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '@/features/auth';

type Props = {
  children: ReactNode;
  isAuthNeeded: boolean;
  rejectRoute: string;
};

export const AuthRouteGuard = ({ children, isAuthNeeded, rejectRoute }: Props): ReactNode => {
  const { email } = useAuth();

  if ((isAuthNeeded && !email) || (!isAuthNeeded && email)) {
    return <Navigate replace={true} to={rejectRoute} />;
  }

  return children;
};
