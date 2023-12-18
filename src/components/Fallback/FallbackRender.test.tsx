import { ErrorBoundary } from 'react-error-boundary';

import { screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { renderWithProviders } from '@/test/renderWithProviders';

const TestComponent = (): JSX.Element => {
  throw new Error('Test Error');
};
describe('PageContent', () => {
  it('async component should throw', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => null);

    renderWithProviders(
      <ErrorBoundary fallback={<>Error Boundary</>}>
        <TestComponent />
      </ErrorBoundary>,
    );

    await vi.waitFor(() => {
      expect(screen.getByText('Error Boundary')).toBeVisible();
    });
  });
});
