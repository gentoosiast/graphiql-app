import type { JSX } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { I18NProvider } from '@/providers/i18n';
import { router } from '@/routes';
import { store } from '@/store';
import theme from '@/theme';

export const AppProvider = (): JSX.Element => {
  return (
    <Provider store={store}>
      <I18NProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </I18NProvider>
    </Provider>
  );
};
