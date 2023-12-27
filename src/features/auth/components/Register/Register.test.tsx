import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { I18NProvider } from '@/providers/i18n';

import { Register } from './Register';

describe('Register', () => {
  it('should validate email', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <I18NProvider>
          <Register setIsLogin={() => {}} />
        </I18NProvider>
      </MemoryRouter>,
    );
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/^password$/i);

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
          <Register setIsLogin={() => {}} />
        </I18NProvider>
      </MemoryRouter>,
    );
    const passwordInput = screen.getByPlaceholderText(/^password$/i);
    const emailInput = screen.getByPlaceholderText(/email/i);

    await user.clear(passwordInput);
    await user.type(passwordInput, 'test');
    await user.click(emailInput);

    expect(
      await screen.findByText('Password must be at least 8 characters long'),
    ).toBeInTheDocument();

    await user.type(passwordInput, '12345678');
    await user.click(emailInput);

    expect(
      await screen.findByText(
        'Password must contain at least one letter, one digit, one special character',
      ),
    ).toBeInTheDocument();
  }, 10000);

  it('should require password confirmation', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <I18NProvider>
          <Register setIsLogin={() => {}} />
        </I18NProvider>
      </MemoryRouter>,
    );
    const passwordInput = screen.getByPlaceholderText(/^password$/i);
    const confirmPasswordInput = screen.getByPlaceholderText(/^confirm password$/i);

    await user.clear(passwordInput);
    await user.clear(confirmPasswordInput);

    await user.type(passwordInput, 'some password');
    await user.type(confirmPasswordInput, 'another password');

    await user.click(passwordInput);

    expect(await screen.findByText('Passwords do not match')).toBeInTheDocument();
  }, 10000);

  it('button to toggle password visibility should work', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <I18NProvider>
          <Register setIsLogin={() => {}} />
        </I18NProvider>
      </MemoryRouter>,
    );
    const confirmPasswordInput = screen.getByPlaceholderText<HTMLInputElement>(/confirm password/i);
    const visibilityButton = screen.getAllByLabelText(/toggle password visibility/i)[1];

    expect(confirmPasswordInput.type).toBe('password');

    await user.click(visibilityButton);

    expect(confirmPasswordInput.type).toBe('text');
  });
});
