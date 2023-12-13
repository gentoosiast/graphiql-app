import type { JSX } from 'react';

import { AppProvider } from '@/providers/app';

export const App = (): JSX.Element => {
  return <AppProvider />;
};
