import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { I18NProvider } from '@/providers/i18n';
import { renderWithProviders } from '@/test/renderWithProviders';

import { PageContent } from './PageContent';

describe('PageContent', () => {
  it('should render', async () => {
    renderWithProviders(
      <I18NProvider>
        <PageContent />
      </I18NProvider>,
    );

    expect(await screen.findByRole('main')).toBeInTheDocument();
  });
});
