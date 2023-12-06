import { useContext } from 'react';

import type { I18NContextData } from '@/contexts/i18n';

import { I18NContext } from '@/contexts/i18n';

export const useI18NContext = (): I18NContextData => {
  const data = useContext(I18NContext);

  if (!data) {
    throw new Error("Can't use 'I18NContext' outside of 'I18NProvider'");
  }

  return data;
};