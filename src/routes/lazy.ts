import { lazy } from 'react';

export const AuthPage = lazy(async () => {
  const { AuthPage } = await import('@/features/auth');

  return { default: AuthPage };
});

export const MainPage = lazy(async () => {
  const { MainPage } = await import('@/features/graphiql');

  return { default: MainPage };
});
