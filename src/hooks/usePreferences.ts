import { useCallback, useMemo } from 'react';

const getLocalStorageData = <T>(
  key: string,
  validatorFn: (value: unknown) => value is T,
  fallbackValue: T,
): T => {
  try {
    const lsData = localStorage.getItem(key);

    if (!lsData) {
      return fallbackValue;
    }

    const parsedData: unknown = JSON.parse(lsData);

    if (validatorFn(parsedData)) {
      return parsedData;
    }

    return fallbackValue;
  } catch {
    return fallbackValue;
  }
};

const setLocalStorageData = <T>(key: string, data: T): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const usePreferences = <T>(
  uniquePrefix: string,
  validatorFn: (value: unknown) => value is T,
  fallbackValue: T,
): readonly [T, (data: T) => void] => {
  const LS_KEY = `${uniquePrefix}-preferences`;
  const preferences = useMemo(
    () => getLocalStorageData<T>(LS_KEY, validatorFn, fallbackValue),
    [fallbackValue, validatorFn, LS_KEY],
  );
  const setPreferences = useCallback(
    (data: T): void => setLocalStorageData<T>(LS_KEY, data),
    [LS_KEY],
  );

  return [preferences, setPreferences] as const;
};
