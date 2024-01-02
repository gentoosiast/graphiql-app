import { ErrorBoundary } from 'react-error-boundary';

import { RootLayout } from '@/components';
import { Fallback } from '@/components/Fallback';
import { NotFoundPage, WelcomePage } from '@/features/misc';

import { AuthRouteGuard } from './AuthRouteGuard';
import { AuthPage, MainPage } from './lazy';

export const routes = [
  {
    children: [
      { element: <WelcomePage />, index: true },
      {
        element: (
          <AuthRouteGuard authRejectStatus="UNAUTHENTICATED" rejectRoute="/">
            <MainPage />
          </AuthRouteGuard>
        ),
        path: '/main',
      },
      {
        element: (
          <AuthRouteGuard authRejectStatus="AUTHENTICATED" rejectRoute="/main">
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
