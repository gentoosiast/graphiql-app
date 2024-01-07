import { MemoryRouter } from 'react-router-dom';

import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { FirebaseError } from 'firebase/app';
import { AuthErrorCodes } from 'firebase/auth';
import { afterAll, afterEach, describe, expect, it, vi } from 'vitest';

import { I18NProvider } from '@/providers/i18n';
import { renderWithProviders } from '@/test/renderWithProviders';

import { Login } from './Login';

const { mockCreateUser } = vi.hoisted(() => {
  return { mockCreateUser: vi.fn() };
});

vi.mock('firebase/auth', async () => {
  const actual = await vi.importActual('firebase/auth');

  return {
    ...actual,
    signInWithEmailAndPassword: mockCreateUser,
  };
});

describe('Login', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  afterAll(() => {
    vi.clearAllMocks();
  });

  it('should validate email', async () => {
    const user = userEvent.setup();

    renderWithProviders(
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

    renderWithProviders(
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
  }, 10000);

  it('button to toggle password visibility should work', async () => {
    const user = userEvent.setup();

    renderWithProviders(
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
  }, 10000);

  it('should show an appropriate message upon successful login', async () => {
    const user = userEvent.setup();

    mockCreateUser.mockImplementationOnce(() => Promise.resolve());

    renderWithProviders(
      <MemoryRouter>
        <I18NProvider>
          <Login setIsLogin={() => {}} />
        </I18NProvider>
      </MemoryRouter>,
    );
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText<HTMLInputElement>(/password/i);
    const submitButton = screen.getByRole('button', { name: /sign in/i });

    await user.clear(emailInput);
    await user.type(emailInput, 'test@gmail.com');
    await user.clear(passwordInput);
    await user.type(passwordInput, 'pass123!');
    await user.click(submitButton);

    expect(await screen.findByRole('alert')).toHaveTextContent(/you've successfully signed in/i);
  }, 10000);

  it('should show an appropriate message when catching firebase error', async () => {
    const user = userEvent.setup();

    mockCreateUser.mockImplementationOnce(() =>
      Promise.reject(new FirebaseError(AuthErrorCodes.INVALID_IDP_RESPONSE, 'Invalid-credential')),
    );

    renderWithProviders(
      <MemoryRouter>
        <I18NProvider>
          <Login setIsLogin={() => {}} />
        </I18NProvider>
      </MemoryRouter>,
    );
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText<HTMLInputElement>(/password/i);
    const submitButton = screen.getByRole('button', { name: /sign in/i });

    await user.clear(emailInput);
    await user.type(emailInput, 'incorrect@gmail.com');
    await user.clear(passwordInput);
    await user.type(passwordInput, 'pass123!');
    await user.click(submitButton);

    expect(await screen.findByRole('alert')).toHaveTextContent(/incorrect email or password/i);
  }, 10000);

  it('should display notification when submitting the form and unknown error happens', async () => {
    mockCreateUser.mockImplementationOnce(() =>
      Promise.reject(new FirebaseError(AuthErrorCodes.INVALID_API_KEY, 'Invalid API key')),
    );

    const user = userEvent.setup();

    renderWithProviders(
      <MemoryRouter>
        <I18NProvider>
          <Login setIsLogin={() => {}} />
        </I18NProvider>
      </MemoryRouter>,
    );

    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/^password$/i);
    const submitButton = screen.getByRole('button', { name: /sign in/i });

    await user.clear(emailInput);
    await user.clear(passwordInput);

    await user.type(emailInput, 'test@example.com');
    await user.type(passwordInput, 'abracadabra42$');

    await user.click(submitButton);

    expect(mockCreateUser).toHaveBeenCalled();

    const failureNotification = await screen.findByText(/something went wrong/i);

    expect(failureNotification).toBeInTheDocument();
  }, 10000);
});
