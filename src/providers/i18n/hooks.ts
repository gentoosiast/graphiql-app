import { useContext } from 'react';

import type { I18NContextData } from './types';

import { I18NContext } from './context';

export const useI18NContext = (): I18NContextData => {
  const data = useContext(I18NContext);

  if (!data) {
    throw new Error("Can't use 'I18NContext' outside of 'I18NProvider'");
  }

  return data;
};
