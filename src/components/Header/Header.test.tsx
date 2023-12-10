import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { I18NProvider } from '@/providers/i18n';
import { store } from '@/store';

import { Header } from '.';

describe('Footer', () => {
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

    const welcomeButton = screen.getByText(/welcome page/i);
    const enButton = screen.getByText(/en/i);
    const ruButton = screen.getByText(/ru/i);

    expect(welcomeButton).toBeInTheDocument();
    expect(enButton).toBeInTheDocument();
    expect(ruButton).toBeInTheDocument();
  });
});
