import type { Dispatch, SetStateAction } from 'react';

import { I18NLanguage } from '@/config/i18n';

export type I18NContextData = {
  language: I18NLanguage;
  setLanguage: Dispatch<SetStateAction<I18NLanguage>>;
  translate: (token: string) => string;
};
