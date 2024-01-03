import type { Preferences } from '@/types';

import { isI18NLanguage } from './isI18NLanguage';

export const isPreferences = (value: unknown): value is Preferences => {
  if (value && typeof value === 'object' && 'language' in value && isI18NLanguage(value.language)) {
    return true;
  }

  return false;
};
