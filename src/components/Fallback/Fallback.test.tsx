import { ErrorBoundary } from 'react-error-boundary';

import { screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { I18NProvider } from '@/providers';
import { renderWithProviders } from '@/test/renderWithProviders';

import { Fallback } from './Fallback';

const TestComponent = (): JSX.Element => {
  throw new Error('Test Error');
};

describe('Fallback', () => {
  it('error should be caught by error boundary', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => null);

    renderWithProviders(
      <I18NProvider>
        <ErrorBoundary FallbackComponent={Fallback}>
          <TestComponent />
        </ErrorBoundary>
      </I18NProvider>,
    );

    expect(await screen.findByText(/something went wrong.. try to reload the page/i)).toBeVisible();
    expect(screen.getByText(/test error/i)).toBeVisible();
  });
});
