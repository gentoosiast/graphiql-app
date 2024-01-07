import { MemoryRouter } from 'react-router-dom';

import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { FirebaseError } from 'firebase/app';
import { AuthErrorCodes } from 'firebase/auth';
import { afterAll, afterEach, describe, expect, it, vi } from 'vitest';

import { I18NProvider } from '@/providers/i18n';
import { renderWithProviders } from '@/test/renderWithProviders';

import { Register } from './Register';

const { mockCreateUser } = vi.hoisted(() => {
  return { mockCreateUser: vi.fn() };
});

vi.mock('firebase/auth', async () => {
  const actual = await vi.importActual('firebase/auth');

  return {
    ...actual,
    createUserWithEmailAndPassword: mockCreateUser,
  };
});

describe('Register', () => {
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

    renderWithProviders(
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

    renderWithProviders(
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

    renderWithProviders(
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

  it('should submit correctly filled-in form and display notification', async () => {
    const user = userEvent.setup();

    mockCreateUser.mockImplementationOnce(() => Promise.resolve());

    renderWithProviders(
      <MemoryRouter>
        <I18NProvider>
          <Register setIsLogin={() => {}} />
        </I18NProvider>
      </MemoryRouter>,
    );

    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/^password$/i);
    const confirmPasswordInput = screen.getByPlaceholderText(/^confirm password$/i);
    const submitButton = screen.getByRole('button', { name: /sign up/i });

    await user.clear(emailInput);
    await user.type(emailInput, 'test@example.com');

    await user.clear(passwordInput);
    await user.type(passwordInput, 'abracadabra42$');

    await user.clear(confirmPasswordInput);
    await user.type(confirmPasswordInput, 'abracadabra42$');

    await user.click(submitButton);

    const successNotification = await screen.findByText(/account created successfully/i);

    expect(mockCreateUser).toHaveBeenCalled();

    expect(successNotification).toBeInTheDocument();
  }, 10000);

  it('should display notification when submitting the form and user already exists', async () => {
    mockCreateUser.mockImplementationOnce(() =>
      Promise.reject(new FirebaseError(AuthErrorCodes.EMAIL_EXISTS, 'User already exists')),
    );

    const user = userEvent.setup();

    renderWithProviders(
      <MemoryRouter>
        <I18NProvider>
          <Register setIsLogin={() => {}} />
        </I18NProvider>
      </MemoryRouter>,
    );

    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/^password$/i);
    const confirmPasswordInput = screen.getByPlaceholderText(/^confirm password$/i);
    const submitButton = screen.getByRole('button', { name: /sign up/i });

    await user.clear(emailInput);
    await user.clear(passwordInput);
    await user.clear(confirmPasswordInput);

    await user.type(emailInput, 'test@example.com');
    await user.type(passwordInput, 'abracadabra42$');
    await user.type(confirmPasswordInput, 'abracadabra42$');

    await user.click(submitButton);

    expect(mockCreateUser).toHaveBeenCalled();

    const failureNotification = await screen.findByText(/account already exists/i);

    expect(failureNotification).toBeInTheDocument();
  }, 10000);

  it('should display notification when submitting the form and unknown error happens', async () => {
    mockCreateUser.mockImplementationOnce(() =>
      Promise.reject(new FirebaseError(AuthErrorCodes.INVALID_API_KEY, 'Invalid API key')),
    );

    const user = userEvent.setup();

    renderWithProviders(
      <MemoryRouter>
        <I18NProvider>
          <Register setIsLogin={() => {}} />
        </I18NProvider>
      </MemoryRouter>,
    );

    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/^password$/i);
    const confirmPasswordInput = screen.getByPlaceholderText(/^confirm password$/i);
    const submitButton = screen.getByRole('button', { name: /sign up/i });

    await user.clear(emailInput);
    await user.clear(passwordInput);
    await user.clear(confirmPasswordInput);

    await user.type(emailInput, 'test@example.com');
    await user.type(passwordInput, 'abracadabra42$');
    await user.type(confirmPasswordInput, 'abracadabra42$');

    await user.click(submitButton);

    expect(mockCreateUser).toHaveBeenCalled();

    const failureNotification = await screen.findByText(/something went wrong/i);

    expect(failureNotification).toBeInTheDocument();
  }, 10000);
});
