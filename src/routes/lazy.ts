import { lazy } from 'react';

export const AuthPage = lazy(() => import('@/features/auth/routes/AuthPage'));
export const MainPage = lazy(() => import('@/features/graphiql/routes/MainPage'));
