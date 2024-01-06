import { MemoryRouter } from 'react-router-dom';

import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { I18NProvider } from '@/providers/i18n';
import { renderWithProviders } from '@/test/renderWithProviders';

import { Header } from '.';

describe('Header', () => {
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
});
