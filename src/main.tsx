import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/config/firebase';

import { App } from './app/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
