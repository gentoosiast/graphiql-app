import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { I18NProvider } from '@/providers/i18n';
import { store } from '@/store';

import { Header } from '.';

describe('Header', () => {
  it('should render header', () => {
    render(
      <Provider store={store}>
        <I18NProvider>
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        </I18NProvider>
      </Provider>,
    );

    const welcomeLink = screen.getByRole('link');

    expect(welcomeLink).toBeInTheDocument();
  });
});
