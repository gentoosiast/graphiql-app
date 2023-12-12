import { MemoryRouter } from 'react-router-dom';

import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { I18NProvider } from '@/providers/i18n';
import { renderWithProviders } from '@/test/render-with-providers';

import { AuthPage } from '.';

describe('AuthForm', () => {
  it('should render login form', () => {
    renderWithProviders(
      <MemoryRouter>
        <I18NProvider>
          <AuthPage />
        </I18NProvider>
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { name: /Sign In/i })).toBeInTheDocument();
  });

  it('should switch to the register form upon clicking on "Sign up"', async () => {
    renderWithProviders(
      <MemoryRouter>
        <I18NProvider>
          <AuthPage />
        </I18NProvider>
      </MemoryRouter>,
    );
    await userEvent.click(screen.getByRole('button', { name: /Sign up/i }));

    expect(await screen.findByRole('heading', { name: /Sign up/i })).toBeInTheDocument();
  });
});
