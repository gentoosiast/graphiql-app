import type { JSX } from 'react';

import { AppProvider } from '@/providers/app';

import { useAuthStateChange } from './hooks';

export const App = (): JSX.Element => {
  useAuthStateChange();

  return <AppProvider />;
};
