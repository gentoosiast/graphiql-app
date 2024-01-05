import { MemoryRouter } from 'react-router-dom';

import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { I18NProvider } from '@/providers';
import { renderWithProviders } from '@/test/renderWithProviders';

import { NavButton } from './NavButton';

describe('Nav button', () => {
  it('should render', () => {
    renderWithProviders(
      <I18NProvider>
        <MemoryRouter>
          {NavButton({ formMode: 'login', textContent: 'sign in', to: '/auth' })}
        </MemoryRouter>
      </I18NProvider>,
    );

    const signInLink = screen.getByRole('link', { name: /sign in/i });

    expect(signInLink).toBeInTheDocument();
  });
});
