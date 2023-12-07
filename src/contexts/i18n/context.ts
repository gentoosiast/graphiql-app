import { createContext } from 'react';

import type { I18NContextData } from './types';

export const I18NContext = createContext<I18NContextData | null>(null);
