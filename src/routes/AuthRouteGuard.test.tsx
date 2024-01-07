import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '@/test/renderWithProviders';

import { AuthRouteGuard } from './AuthRouteGuard';

const routes = [
  {
    element: <main>Main Route</main>,
    path: '/',
  },
  {
    element: (
      <AuthRouteGuard authRejectStatus="UNAUTHENTICATED" rejectRoute="/">
        <main>Private Route</main>
      </AuthRouteGuard>
    ),
    path: '/private',
  },
];

describe('AuthRouteGuard', () => {
  it('should allow authenticated users to access private routes', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/private'],
    });

    renderWithProviders(<RouterProvider router={router} />, {
      preloadedState: { auth: { authState: 'AUTHENTICATED' } },
    });

    const main = screen.getByRole('main');

    expect(main).toHaveTextContent(/private route/i);
  });

  it('should block unauthenticated users from accessing private routes', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/private'],
    });

    renderWithProviders(<RouterProvider router={router} />, {
      preloadedState: { auth: { authState: 'UNAUTHENTICATED' } },
    });

    const main = screen.getByRole('main');

    expect(main).toHaveTextContent(/main route/i);
  });

  it('should show spinner while getting auth data', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/private'],
    });

    renderWithProviders(<RouterProvider router={router} />, {
      preloadedState: { auth: { authState: 'PENDING' } },
    });

    const spinner = screen.getByRole('progressbar');

    expect(spinner).toBeInTheDocument();
  });
});
