import type { JSX } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { CssBaseline } from '@mui/material';

import { I18NProvider, ThemeProvider } from '@/providers';
import { router } from '@/routes';
import { store } from '@/store';

export const AppProvider = (): JSX.Element => {
  return (
    <Provider store={store}>
      <I18NProvider>
        <ThemeProvider>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </I18NProvider>
    </Provider>
  );
};
