import type { JSX } from 'react';
import { PropsWithChildren, useCallback, useMemo, useState } from 'react';

import type { I18NContextData } from '@/contexts/i18n';
import type { Preferences } from '@/types';

import { I18NLanguage, languageData } from '@/config/i18n';
import { defaultPreferences } from '@/config/preferences';
import { UNIQUE_STORAGE_PREFIX } from '@/config/storage';
import { I18NContext } from '@/contexts/i18n/context';
import { usePreferences } from '@/hooks';
import { isPreferences } from '@/validators';

export const I18NProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [preferences, setPreferences] = usePreferences<Preferences>(
    UNIQUE_STORAGE_PREFIX,
    isPreferences,
    defaultPreferences,
  );
  const [language, setLang] = useState(preferences.language);
  const setLanguage = useCallback(
    (lang: I18NLanguage): void => {
      setLang(lang);
      setPreferences({ ...preferences, language: lang });
    },
    [preferences, setPreferences],
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
    [translate, language, setLanguage],
  );

  return <I18NContext.Provider value={initialContextData}>{children}</I18NContext.Provider>;
};
