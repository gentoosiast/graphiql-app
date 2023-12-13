import { createContext, useContext } from 'react';

import type { I18NContextData } from './types';

export const I18NContext = createContext<I18NContextData | null>(null);

export const useI18NContext = (): I18NContextData => {
  const data = useContext(I18NContext);

  if (!data) {
    throw new Error("Can't use 'I18NContext' outside of 'I18NProvider'");
  }

  return data;
};
