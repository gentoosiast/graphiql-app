import type { ReactNode } from 'react';
import { useCallback, useMemo, useState } from 'react';

import type { I18NContextData } from '@/contexts/i18n';

import { DEFAULT_I18N_LANGUAGE, languageData } from '@/config/i18n';
import { I18NContext } from '@/contexts/i18n/context';

type I18NProviderProps = {
  children: ReactNode;
};

export const I18NProvider = ({ children }: I18NProviderProps): JSX.Element => {
  const [language, setLanguage] = useState(DEFAULT_I18N_LANGUAGE);
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