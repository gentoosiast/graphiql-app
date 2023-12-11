import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { I18NProvider } from '@/providers/i18n/provider';

import { Register } from './Register';

describe('Register', () => {
  const user = userEvent.setup();

  it('should validate email', async () => {
    render(
      <MemoryRouter>
        <I18NProvider>
          <Register setIsLogin={() => {}} />
        </I18NProvider>
      </MemoryRouter>,
    );
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const passwordInput = screen.getByPlaceholderText(/^Password$/i);

    await user.type(emailInput, 'test');
    await user.click(passwordInput);

    expect(await screen.findByText('Invalid email')).toBeInTheDocument();
  });

  it('should validate password', async () => {
    render(
      <MemoryRouter>
        <I18NProvider>
          <Register setIsLogin={() => {}} />
        </I18NProvider>
      </MemoryRouter>,
    );
    const passwordInput = screen.getByPlaceholderText(/^Password$/i);
    const emailInput = await screen.findByPlaceholderText(/Email/i);

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
  });

  it('should required password confirmation', async () => {
    render(
      <MemoryRouter>
        <I18NProvider>
          <Register setIsLogin={() => {}} />
        </I18NProvider>
      </MemoryRouter>,
    );
    const passwordInput = screen.getByPlaceholderText(/^Password$/i);
    const confirmPasswordInput = screen.getByPlaceholderText(/^Confirm password$/i);

    await user.type(passwordInput, 'some password');
    await user.type(confirmPasswordInput, 'another password');

    await user.click(passwordInput);

    expect(await screen.findByText('Passwords do not match')).toBeInTheDocument();
  });

  it('button to toggle password visibility should work', async () => {
    render(
      <MemoryRouter>
        <I18NProvider>
          <Register setIsLogin={() => {}} />
        </I18NProvider>
      </MemoryRouter>,
    );

    const confirmPasswordInput = screen.getByPlaceholderText<HTMLInputElement>(/Confirm password/i);
    const visibilityButton = screen.getAllByLabelText(/toggle password visibility/i)[1];

    expect(confirmPasswordInput.type).toBe('password');

    await user.click(visibilityButton);

    expect(confirmPasswordInput.type).toBe('text');
  });
});
