import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { I18NProvider } from 'src/providers/i18n/provider';
import { describe, expect, it } from 'vitest';

import { WelcomePage } from './WelcomePage';

describe('Welcome page', () => {
  it('should render welcome page', () => {
    render(
      <I18NProvider>
        <MemoryRouter>
          <WelcomePage />
        </MemoryRouter>
      </I18NProvider>,
    );

    const teamNameTitle = screen.getByRole('heading', { level: 2 });
    const memberName = screen.getByText('Kate Goncharick');

    expect(teamNameTitle).toHaveTextContent(/san junipero/i);
    expect(memberName).toBeInTheDocument();
  });
});
