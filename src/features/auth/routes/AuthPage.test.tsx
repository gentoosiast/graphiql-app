import { MemoryRouter } from 'react-router-dom';

import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { I18NProvider } from '@/providers/i18n';
import { renderWithProviders } from '@/test/renderWithProviders';

import AuthPage from './AuthPage';

describe('AuthForm', () => {
  it('should render login form', () => {
    renderWithProviders(
      <MemoryRouter>
        <I18NProvider>
          <AuthPage />
        </I18NProvider>
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument();
  });

  it('should switch to the register form upon clicking on "Sign up"', async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <MemoryRouter>
        <I18NProvider>
          <AuthPage />
        </I18NProvider>
      </MemoryRouter>,
    );
    await user.click(screen.getByRole('button', { name: /sign up/i }));

    expect(await screen.findByRole('heading', { name: /sign up/i })).toBeInTheDocument();
  });
});
