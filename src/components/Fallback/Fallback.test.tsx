import { ErrorBoundary } from 'react-error-boundary';

import { screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { I18NProvider } from '@/providers';
import { renderWithProviders } from '@/test/renderWithProviders';

import { Fallback } from '.';
const TestComponent = (): JSX.Element => {
  throw new Error('Test Error');
};

const TestError: Error = new Error('Test Error');
const FallbackWithProvider = (
  <I18NProvider>
    <Fallback error={TestError} resetErrorBoundary={() => {}} />
  </I18NProvider>
);

describe('Fallback', () => {
  it('error should be caught by error boundary', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => null);

    renderWithProviders(
      <ErrorBoundary fallback={FallbackWithProvider}>
        <TestComponent />
      </ErrorBoundary>,
    );

    expect(await screen.findByText(/something went wrong.. try to reload the page/i)).toBeVisible();
    expect(await screen.findByText(/test error/i)).toBeVisible();
  });
});
