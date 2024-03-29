import type { Store } from '@reduxjs/toolkit';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authReducer from '@/features/auth';
import graphiQLReducer, { graphQLApi } from '@/features/graphiql';

const rootReducer = combineReducers({
  auth: authReducer,
  [graphQLApi.reducerPath]: graphQLApi.reducer,
  graphiql: graphiQLReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>): Store<RootState> =>
  configureStore({
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(graphQLApi.middleware),
    preloadedState,
    reducer: rootReducer,
  });

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
