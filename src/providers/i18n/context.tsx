import { createContext, useCallback, useMemo, useState } from 'react';
import type { JSX, ReactNode } from 'react';

import en from '@/assets/translations/en.json';
import ru from '@/assets/translations/ru.json';

import type { I18NContextData } from './types';

import { I18NLanguage } from './enums';

export const I18NContext = createContext<I18NContextData | null>(null);

const languageData: Record<I18NLanguage, Record<string, string>> = {
  en,
  ru,
};

type I18NProviderProps = {
  children: ReactNode;
};

export const I18NProvider = ({ children }: I18NProviderProps): JSX.Element => {
  const [language, setLanguage] = useState(I18NLanguage.English);
  const getTranslation = useCallback(
    (token: string): string => {
      if (token in languageData[language]) {
        return languageData[language][token];
      }

      return `Translation for '${token}' not found`;
    },
    [language],
  );

  const initialContextData: I18NContextData = useMemo(
    () => ({
      getTranslation,
      language,
      setLanguage,
    }),
    [getTranslation, language],
  );

  return <I18NContext.Provider value={initialContextData}>{children}</I18NContext.Provider>;
};
