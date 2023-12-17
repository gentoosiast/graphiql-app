import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@fontsource/philosopher';

import '@/config/firebase';

import { App } from './App';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

('use client');

import { ErrorBoundary } from 'react-error-boundary';

export function Fallback({ error }: { error: unknown }): JSX.Element | undefined {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.
  if (error instanceof Error) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: 'red' }}>{error.message}</pre>
      </div>
    );
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={Fallback}>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
