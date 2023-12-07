import type { JSX } from 'react';

import { I18NLanguage } from '@/config/i18n';
import { useI18NContext } from '@/providers/i18n';

export const TestI18NProvider = (): JSX.Element => {
  const { getTranslation, language, setLanguage } = useI18NContext();

  return (
    <>
      <h1>Example translation: {getTranslation('greeting')}</h1>
      <p>Current Language: {language}</p>
      <button onClick={() => setLanguage(I18NLanguage.English)} type="button">
        Switch Language to English
      </button>
      <button onClick={() => setLanguage(I18NLanguage.Russian)} type="button">
        Switch Language to Russian
      </button>
    </>
  );
};
