import en from './locales/en.translation.json';
import ru from './locales/ru.translation.json';

export enum I18NLanguage {
  English = 'en',
  Russian = 'ru',
}

export const DEFAULT_I18N_LANGUAGE = I18NLanguage.English;

export const languageData: Record<I18NLanguage, Record<string, string>> = {
  en,
  ru,
};
