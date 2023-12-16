import { RootLayout } from '@/components';
import { AuthPage } from '@/features/auth/';
import { MainPage } from '@/features/graphiql';
import { NotFoundPage, WelcomePage } from '@/features/misc';

import { PrivateRouteGuard } from './PrivateRouteGuard';

export const routes = [
  {
    children: [
      { element: <WelcomePage />, index: true },
      {
        element: (
          <PrivateRouteGuard>
            <MainPage />
          </PrivateRouteGuard>
        ),
        path: '/main',
      },
      { element: <AuthPage />, path: '/auth' },
      { element: <NotFoundPage />, path: '*' },
    ],
    element: <RootLayout />,
    path: '/',
  },
];
