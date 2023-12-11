import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { I18NProvider } from '@/providers/i18n/provider';

import { Login } from './Login';

describe('Login', () => {
  const user = userEvent.setup();

  it('should validate email', async () => {
    render(
      <MemoryRouter>
        <I18NProvider>
          <Login setIsLogin={() => {}} />
        </I18NProvider>
      </MemoryRouter>,
    );
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);

    await userEvent.type(emailInput, 'test');
    await user.click(passwordInput);

    expect(await screen.findByText('Invalid email')).toBeInTheDocument();
  });

  it('should validate password', async () => {
    render(
      <MemoryRouter>
        <I18NProvider>
          <Login setIsLogin={() => {}} />
        </I18NProvider>
      </MemoryRouter>,
    );
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    const emailInput = await screen.findByPlaceholderText(/Email/i);

    await userEvent.type(passwordInput, 'test');
    await user.click(emailInput);

    expect(
      await screen.findByText('Password must be at least 8 characters long'),
    ).toBeInTheDocument();

    await userEvent.type(passwordInput, '123456789');
    await user.click(emailInput);

    expect(
      await screen.findByText(
        'Password must contain at least one letter, one digit, one special character',
      ),
    ).toBeInTheDocument();
  });

  it('button to toggle password visibility should work', async () => {
    render(
      <MemoryRouter>
        <I18NProvider>
          <Login setIsLogin={() => {}} />
        </I18NProvider>
      </MemoryRouter>,
    );

    const passwordInput = screen.getByPlaceholderText<HTMLInputElement>(/Password/i);
    const visibilityButton = screen.getByLabelText(/toggle password visibility/i);

    expect(passwordInput.type).toBe('password');

    await user.click(visibilityButton);

    expect(passwordInput.type).toBe('text');
  });
});
