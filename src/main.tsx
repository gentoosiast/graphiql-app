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

import { Fallback } from './components/Fallback/';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={Fallback}>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
