import { MemoryRouter } from 'react-router-dom';

import { screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { I18NProvider } from '@/providers';
import { renderWithProviders } from '@/test/renderWithProviders';

import { RootLayout } from './RootLayout';

vi.mock('../PageContent', () => ({
  PageContent: vi.fn(() => <main>PageContent</main>),
}));

describe('RootLayout', () => {
  it('should render', () => {
    renderWithProviders(
      <MemoryRouter>
        <I18NProvider>
          <RootLayout />
        </I18NProvider>
      </MemoryRouter>,
    );

    const section = screen.getByRole('main');

    expect(section).toBeInTheDocument();
  });
});
