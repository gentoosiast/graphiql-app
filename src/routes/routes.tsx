import { ErrorBoundary } from 'react-error-boundary';

import { RootLayout } from '@/components';
import { Fallback } from '@/components/Fallback';
import { AuthPage, AuthState } from '@/features/auth';
import { MainPage } from '@/features/graphiql';
import { NotFoundPage, WelcomePage } from '@/features/misc';

import { AuthRouteGuard } from './AuthRouteGuard';

export const routes = [
  {
    children: [
      { element: <WelcomePage />, index: true },
      {
        element: (
          <AuthRouteGuard authRejectStatus={AuthState.NOT_AUTHENTICATED} rejectRoute="/">
            <MainPage />
          </AuthRouteGuard>
        ),
        path: '/main',
      },
      {
        element: (
          <AuthRouteGuard authRejectStatus={AuthState.AUTHENTICATED} rejectRoute="/main">
            <AuthPage />
          </AuthRouteGuard>
        ),
        path: '/auth',
      },
      { element: <NotFoundPage />, path: '*' },
    ],
    element: (
      <ErrorBoundary FallbackComponent={Fallback}>
        <RootLayout />
      </ErrorBoundary>
    ),
    path: '/',
  },
];
