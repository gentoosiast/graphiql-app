import { MemoryRouter } from 'react-router-dom';

import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { I18NProvider } from '@/providers';
import { renderWithProviders } from '@/test/renderWithProviders';

import { WelcomePage } from './WelcomePage';

describe('Welcome page', () => {
  it('should render', () => {
    renderWithProviders(
      <I18NProvider>
        <MemoryRouter>
          <WelcomePage />
        </MemoryRouter>
      </I18NProvider>,
    );

    const meetTheTeamTitle = screen.getByText(/meet the team/i);
    const memberName = screen.getByText('Kate Goncharick');

    expect(meetTheTeamTitle).toBeInTheDocument();
    expect(memberName).toBeInTheDocument();
  });
});
