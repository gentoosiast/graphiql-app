import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { I18NProvider } from '@/providers/i18n';

import { Login } from './Login';

describe('Login', () => {
  it('should validate email', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <I18NProvider>
          <Login setIsLogin={() => {}} />
        </I18NProvider>
      </MemoryRouter>,
    );
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);

    await user.clear(emailInput);
    await user.type(emailInput, 'test');
    await user.click(passwordInput);

    expect(await screen.findByText('Invalid email')).toBeInTheDocument();
  });

  it('should validate password', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <I18NProvider>
          <Login setIsLogin={() => {}} />
        </I18NProvider>
      </MemoryRouter>,
    );
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const emailInput = await screen.findByPlaceholderText(/email/i);

    await user.clear(passwordInput);
    await user.type(passwordInput, 'test');
    await user.click(emailInput);

    expect(
      await screen.findByText('Password must be at least 8 characters long'),
    ).toBeInTheDocument();

    await user.type(passwordInput, '123456789');
    await user.click(emailInput);

    expect(
      await screen.findByText(
        'Password must contain at least one letter, one digit, one special character',
      ),
    ).toBeInTheDocument();
  });

  it('button to toggle password visibility should work', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <I18NProvider>
          <Login setIsLogin={() => {}} />
        </I18NProvider>
      </MemoryRouter>,
    );

    const passwordInput = screen.getByPlaceholderText<HTMLInputElement>(/password/i);
    const visibilityButton = screen.getByLabelText(/toggle password visibility/i);

    expect(passwordInput.type).toBe('password');

    await user.click(visibilityButton);

    expect(passwordInput.type).toBe('text');
  });
});
