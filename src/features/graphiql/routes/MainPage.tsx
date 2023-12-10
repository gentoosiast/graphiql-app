import { type JSX, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthState, useAuth } from '@/features/auth';

export const MainPage = (): JSX.Element => {
  const navigate = useNavigate();

  const { authState } = useAuth();

  useEffect(() => {
    if (authState === AuthState.NOT_AUTHENTICATED) {
      navigate('/');
    }
  }, [authState, navigate]);
  return (
    <>
      <h1>Main Page</h1>
    </>
  );
};
