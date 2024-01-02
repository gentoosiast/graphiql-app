import type { Store } from '@reduxjs/toolkit';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authReducer from '@/features/auth';
import graphiQLReducer from '@/features/graphiql';
import userReducer from '@/features/users';

const rootReducer = combineReducers({
  auth: authReducer,
  graphiql: graphiQLReducer,
  user: userReducer,
});

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
