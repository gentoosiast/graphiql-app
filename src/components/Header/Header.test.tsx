import { MemoryRouter } from 'react-router-dom';

import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import * as auth from 'firebase/auth';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { I18NProvider } from '@/providers/i18n';
import { renderWithProviders } from '@/test/renderWithProviders';

import { Header } from './Header';

describe('Header', () => {
  afterEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('should render header', () => {
    renderWithProviders(
      <I18NProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </I18NProvider>,
    );

    const welcomeLink = screen.getByRole('link');
    expect(welcomeLink).toBeInTheDocument();
  });

  it('should switch language with dropdown menu', async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <I18NProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </I18NProvider>,
    );

    let languageEngDropdown: HTMLElement | null = screen.getByLabelText(/select ui language/i);
    let languageRusDropdown = screen.queryByLabelText(/выбор языка интерфейса/i);

    expect(languageEngDropdown).toBeInTheDocument();
    expect(languageRusDropdown).not.toBeInTheDocument();

    await user.click(languageEngDropdown);

    const languageItem = screen.getByRole('menuitem', { name: /русский/i });
    await user.click(languageItem);

    languageEngDropdown = screen.queryByLabelText(/select ui language/i);
    expect(languageEngDropdown).not.toBeInTheDocument();

    languageRusDropdown = screen.getByLabelText(/выбор языка интерфейса/i);
    expect(languageRusDropdown).toBeInTheDocument();
  });

  it('should show sign out button for authenticated user', () => {
    renderWithProviders(
      <I18NProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </I18NProvider>,
      { preloadedState: { auth: { authState: 'AUTHENTICATED' } } },
    );

    const signOutButton = screen.getByRole('button', { name: /sign out/i });

    expect(signOutButton).toBeInTheDocument();
  });

  it('should not show sign out button for unauthenticated user', () => {
    renderWithProviders(
      <I18NProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </I18NProvider>,
    );

    const signOutButton = screen.queryByRole('button', { name: /sign out/i });

    expect(signOutButton).not.toBeInTheDocument();
  });

  it('should sign out authenticated user when clicking on sign out button', async () => {
    const user = userEvent.setup();

    vi.spyOn(auth, 'signOut').mockImplementation(() => Promise.resolve());

    renderWithProviders(
      <I18NProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </I18NProvider>,
      { preloadedState: { auth: { authState: 'AUTHENTICATED' } } },
    );

    const signOutButton = screen.getByRole('button', { name: /sign out/i });

    await user.click(signOutButton);

    expect(auth.signOut).toHaveBeenCalled();
  });
});
