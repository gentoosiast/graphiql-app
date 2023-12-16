import { MemoryRouter } from 'react-router-dom';

import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { I18NProvider } from '@/providers/i18n/I18NProvider';
import { renderWithProviders } from '@/test/render-with-providers';

import { NotFoundPage } from './NotFoundPage';

describe('Not found page', () => {
  it('should render not found page', () => {
    renderWithProviders(
      <I18NProvider>
        <MemoryRouter>
          <NotFoundPage />
        </MemoryRouter>
      </I18NProvider>,
    );

    const notFoundPageTitle = screen.getByRole('heading', { level: 1 });
    const welcomePageLink = screen.getByRole('link');

    expect(notFoundPageTitle).toHaveTextContent(/oh.. hello?/i);
    expect(welcomePageLink).toBeInTheDocument();
  });
});
