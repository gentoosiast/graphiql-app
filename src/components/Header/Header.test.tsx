import { MemoryRouter } from 'react-router-dom';

import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { I18NProvider } from '@/providers/i18n';
import { renderWithProviders } from '@/test/render-with-providers';

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
});
