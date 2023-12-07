import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { I18NProvider } from 'src/providers/i18n/provider';
import { describe, expect, it } from 'vitest';

import { WelcomePage } from '.';

describe('Welcome page', () => {
  it('should render welcome page', () => {
    render(
      <I18NProvider>
        <MemoryRouter>
          <WelcomePage />
        </MemoryRouter>
      </I18NProvider>,
    );

    const welcomePageTitle = screen.getByRole('heading', { level: 1 });
    const memberName = screen.getByText('Kate Goncharick');

    expect(welcomePageTitle).toHaveTextContent(/welcome/i);
    expect(memberName).toBeInTheDocument();
  });
});
