import { PrivateRoute, RootLayout } from '@/components';
import { AuthPage } from '@/features/auth/';
import { MainPage } from '@/features/graphiql';
import { NotFoundPage, WelcomePage } from '@/features/misc';

export const routes = [
  {
    children: [
      { element: <WelcomePage />, index: true },
      {
        element: (
          <PrivateRoute>
            <MainPage />
          </PrivateRoute>
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
