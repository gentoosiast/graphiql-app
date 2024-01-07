import { describe, expect, it } from 'vitest';

import { isPreferences } from './isPreferences';

describe('isPreferences', () => {
  it('should return false for invalid key', () => {
    const testData = { lang: 'ru' };
    const isTestDataValid = isPreferences(testData);

    expect(isTestDataValid).toBe(false);
  });
  it('should return false for invalid value', () => {
    const testData = { language: 'bel' };
    const isTestDataValid = isPreferences(testData);

    expect(isTestDataValid).toBe(false);
  });
  it('should return true for valid data', () => {
    const testData = { language: 'en' };
    const isTestDataValid = isPreferences(testData);

    expect(isTestDataValid).toBe(true);
  });
});
