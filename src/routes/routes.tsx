import { ErrorBoundary } from 'react-error-boundary';

import { RootLayout } from '@/components';
import { Fallback } from '@/components/Fallback';
import { AuthPage } from '@/features/auth';
import { MainPage } from '@/features/graphiql';
import { NotFoundPage, WelcomePage } from '@/features/misc';

import { AuthRouteGuard } from './AuthRouteGuard';

export const routes = [
  {
    children: [
      { element: <WelcomePage />, index: true },
      {
        element: (
          <AuthRouteGuard isAuthNeeded={true} rejectRoute="/">
            <MainPage />
          </AuthRouteGuard>
        ),
        path: '/main',
      },
      {
        element: (
          <AuthRouteGuard isAuthNeeded={false} rejectRoute="/main">
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
