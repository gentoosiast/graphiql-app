import type { AlertColor } from '@mui/material';
import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import { DEFAULT_GRAPHQL_ENDPOINT } from '../constants';

type GraphiQLState = {
  endpoint: string;
  headers: string;
  notificationSeverity: AlertColor;
  notificationText: string;
  request: string;
  response: string;
  variables: string;
};

const initialState: GraphiQLState = {
  endpoint: DEFAULT_GRAPHQL_ENDPOINT,
  headers: '{\n  \n}',
  notificationSeverity: 'info',
  notificationText: '',
  request: '',
  response: '',
  variables: '{\n  \n}',
};

const graphiQLSlice = createSlice({
  initialState,
  name: 'graphiql',
  reducers: {
    setEndpoint(state, action: PayloadAction<string>) {
      state.endpoint = action.payload;
    },
    setError(state, action: PayloadAction<{ errorMessage: string; errorResponse: string }>) {
      state.notificationSeverity = 'error';
      state.notificationText = action.payload.errorMessage;
      state.response = action.payload.errorResponse;
    },
    setHeaders(state, action: PayloadAction<string>) {
      state.headers = action.payload;
    },
    setNotification(state, action: PayloadAction<{ message: string; severity: AlertColor }>) {
      state.notificationText = action.payload.message;
      state.notificationSeverity = action.payload.severity;
    },
    setRequest(state, action: PayloadAction<string>) {
      state.request = action.payload;
    },
    setResponse(state, action: PayloadAction<string>) {
      state.response = action.payload;
    },
    setVariables(state, action: PayloadAction<string>) {
      state.variables = action.payload;
    },
  },
});

export const {
  setEndpoint,
  setError,
  setHeaders,
  setNotification,
  setRequest,
  setResponse,
  setVariables,
} = graphiQLSlice.actions;

export default graphiQLSlice.reducer;
