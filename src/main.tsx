import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import '@fontsource/philosopher';
import { CssBaseline } from '@mui/material';

import { I18NProvider } from './providers/i18n';
import { router } from './routes';
import { store } from './store';
import theme from './theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <I18NProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </I18NProvider>
    </Provider>
  </StrictMode>,
);
