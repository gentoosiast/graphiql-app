import type { JSX } from 'react';
import { PropsWithChildren, useCallback, useMemo, useState } from 'react';

import type { I18NContextData } from '@/contexts/i18n';

import { DEFAULT_I18N_LANGUAGE, languageData } from '@/config/i18n';
import { I18NContext } from '@/contexts/i18n/context';
import { useLocalStorage } from '@/features/localStorage';

export const I18NProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [selectedLanguage] = useLocalStorage('sanJunipero-selectedLanguage', DEFAULT_I18N_LANGUAGE);
  const [language, setLanguage] = useState(
    selectedLanguage ? selectedLanguage : DEFAULT_I18N_LANGUAGE,
  );
  const translate = useCallback(
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
      language,
      setLanguage,
      translate,
    }),
    [translate, language],
  );

  return <I18NContext.Provider value={initialContextData}>{children}</I18NContext.Provider>;
};
