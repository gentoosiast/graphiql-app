import { I18NLanguage } from '@/config/i18n';

export const isI18NLanguage = (value: unknown): value is I18NLanguage => {
  return Object.values(I18NLanguage).includes(value as I18NLanguage);
};
