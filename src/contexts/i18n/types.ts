import { I18NLanguage } from '@/config/i18n';

export type I18NContextData = {
  language: I18NLanguage;
  setLanguage: (language: I18NLanguage) => void;
  translate: (token: string) => string;
};
