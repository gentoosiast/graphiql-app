import type { Dispatch, SetStateAction } from 'react';

import { I18NLanguage } from './enums';

export type I18NContextData = {
  getTranslation: (token: string) => string;
  language: I18NLanguage;
  setLanguage: Dispatch<SetStateAction<I18NLanguage>>;
};
