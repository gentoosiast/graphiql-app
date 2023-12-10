import type { Store } from '@reduxjs/toolkit';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/user-slice';

const rootReducer = combineReducers({ user: userReducer });

export const setupStore = (preloadedState?: Partial<RootState>): Store<RootState> =>
  configureStore({
    devTools: true,
    preloadedState,
    reducer: rootReducer,
  });

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
