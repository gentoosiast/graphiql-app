import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

import { useEventCallback, useEventListener } from 'usehooks-ts';

import { DEFAULT_LS_PREFIX } from './constants';

declare global {
  interface WindowEventMap {
    'local-storage': CustomEvent;
  }
}

type SetValue<T> = Dispatch<SetStateAction<T>>;

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  prefix: string = DEFAULT_LS_PREFIX,
): [T, SetValue<T>] {
  const keyWithPrefix = prefix ? `${prefix}-${key}` : key;
  const readValue = useCallback((): T => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(keyWithPrefix);
      return item ? (parseJSON(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key “${keyWithPrefix}”:`, error);
      return initialValue;
    }
  }, [initialValue, keyWithPrefix]);

  const [storedValue, setStoredValue] = useState<T>(readValue);

  const setValue: SetValue<T> = useEventCallback((value) => {
    if (typeof window === 'undefined') {
      console.warn(
        `Tried setting localStorage key “${keyWithPrefix}” even though environment is not a client`,
      );
    }

    try {
      const newValue = value instanceof Function ? value(storedValue) : value;

      window.localStorage.setItem(keyWithPrefix, JSON.stringify(newValue));
      setStoredValue(newValue);

      window.dispatchEvent(new Event('local-storage'));
    } catch (error) {
      console.warn(`Error setting localStorage key “${keyWithPrefix}”:`, error);
    }
  });

  useEffect(() => {
    setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStorageChange = useCallback(
    (event: CustomEvent | StorageEvent) => {
      if ((event as StorageEvent)?.key && (event as StorageEvent).key !== key) {
        return;
      }
      setStoredValue(readValue());
    },
    [key, readValue],
  );

  useEventListener('storage', handleStorageChange);

  useEventListener('local-storage', handleStorageChange);

  return [storedValue, setValue];
}

// A wrapper for "JSON.parse()"" to support "undefined" value
function parseJSON<T>(value: null | string): T | undefined {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '');
  } catch {
    console.error('parsing error on', { value });
    return undefined;
  }
}
