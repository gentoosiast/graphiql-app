import type { AlertColor } from '@mui/material';

import { useReducer } from 'react';
import type { Dispatch } from 'react';

import { DEFAULT_GRAPHQL_ENDPOINT } from '../constants';

type MainPageAction =
  | { payload: { errorMessage: string; errorResponse: string }; type: 'setError' }
  | { payload: { message: string; severity: AlertColor }; type: 'setNotification' }
  | { payload: string; type: 'setEndpoint' }
  | { payload: string; type: 'setHeaders' }
  | { payload: string; type: 'setRequest' }
  | { payload: string; type: 'setResponse' }
  | { payload: string; type: 'setVariables' };

type MainPageState = {
  endpoint: string;
  headers: string;
  notificationSeverity: AlertColor;
  notificationText: string;
  request: string;
  response: string;
  variables: string;
};

const initialState: MainPageState = {
  endpoint: DEFAULT_GRAPHQL_ENDPOINT,
  headers: '{\n  \n}',
  notificationSeverity: 'info',
  notificationText: '',
  request: '',
  response: '',
  variables: '{\n  \n}',
};

const reducer = (state: MainPageState, action: MainPageAction): MainPageState => {
  switch (action.type) {
    case 'setEndpoint': {
      return { ...state, endpoint: action.payload };
    }

    case 'setNotification': {
      return {
        ...state,
        notificationSeverity: action.payload.severity,
        notificationText: action.payload.message,
      };
    }

    case 'setRequest': {
      return { ...state, request: action.payload };
    }

    case 'setResponse': {
      return { ...state, response: action.payload };
    }

    case 'setError': {
      return {
        ...state,
        notificationSeverity: 'error',
        notificationText: action.payload.errorMessage,
        response: action.payload.errorResponse,
      };
    }

    case 'setHeaders': {
      return { ...state, headers: action.payload };
    }

    case 'setVariables': {
      return { ...state, variables: action.payload };
    }
  }
};

export const useMainPageReducer = (): [MainPageState, Dispatch<MainPageAction>] => {
  return useReducer(reducer, initialState);
};
