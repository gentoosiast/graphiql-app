import type { JSX } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { json } from '@codemirror/lang-json';
import SendIcon from '@mui/icons-material/Send';
import { Alert, Container, Fab, IconButton, Snackbar, Stack, TextField } from '@mui/material';
import { tokyoNightStormInit } from '@uiw/codemirror-theme-tokyo-night-storm';
import CodeMirror from '@uiw/react-codemirror';
import { isAxiosError } from 'axios';
import { graphql } from 'cm6-graphql';

import { AuthState, useAuth } from '@/features/auth';

import { graphQLRequest } from '../api/requests';
import { PrettifyIcon, RequestTabbar } from '../components';
import { useMainPageReducer } from '../hooks/useMainPageReducer';
import { prettify } from '../utils/prettify';

import 'hack-font/build/web/hack.css';

export const MainPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { authState } = useAuth();
  const [state, dispatch] = useMainPageReducer();

  const theme = tokyoNightStormInit({
    settings: {
      fontFamily: 'Hack, monospace',
    },
  });

  useEffect(() => {
    if (authState === AuthState.NOT_AUTHENTICATED) {
      navigate('/');
    }
  }, [authState, navigate]);

  const handleSendRequest = async (): Promise<void> => {
    console.log(state.endpoint);
    console.log(state.request);

    try {
      const response = await graphQLRequest({
        endpoint: state.endpoint,
        query: state.request,
        variables: state.variables,
      });

      const responseJSON = JSON.stringify(response.data, null, 2);

      dispatch({ payload: responseJSON, type: 'setResponse' });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';

      if (isAxiosError(error)) {
        const errorJSON = JSON.stringify(error.response?.data, null, 2);

        dispatch({
          payload: { errorMessage, errorResponse: errorJSON },
          type: 'setError',
        });
      } else {
        dispatch({ payload: { errorMessage, errorResponse: '' }, type: 'setError' });
      }
    }
  };

  const handleSnackbarClose = (): void => {
    dispatch({
      payload: { message: '', severity: 'info' },
      type: 'setNotification',
    });
  };

  const handlePrettify = (): void => {
    dispatch({ payload: prettify(state.request), type: 'setRequest' });
  };

  const handleSetVariables = (variables: string): void => {
    try {
      const parsedVariables: unknown = JSON.parse(variables);

      if (parsedVariables && typeof parsedVariables === 'object') {
        dispatch({ payload: parsedVariables, type: 'setVariables' });
      } else {
        throw new Error('Impossible to parse provided GraphQL variables');
      }
    } catch {
      dispatch({ payload: {}, type: 'setVariables' });
    }
  };

  return (
    <>
      <Container maxWidth="xl">
        <Stack direction={{ sm: 'row', xs: 'column' }} spacing={{ sm: 2, xs: 1 }}>
          <Stack spacing={1} sx={{ height: '440px', position: 'relative', width: '100%' }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <TextField
                label="GraphQL endpoint"
                onChange={(e) => dispatch({ payload: e.target.value, type: 'setEndpoint' })}
                placeholder="GraphQL endpoint"
                sx={{ width: '100%' }}
                value={state.endpoint}
              />
              <IconButton aria-label="Prettify query" color="default" onClick={handlePrettify}>
                <PrettifyIcon />
              </IconButton>
              <Fab
                aria-label="Send request"
                color="primary"
                onClick={() => void handleSendRequest()}
                size="small"
              >
                <SendIcon />
              </Fab>
            </Stack>
            <CodeMirror
              extensions={[graphql()]}
              height="100%"
              onChange={(value) => dispatch({ payload: value, type: 'setRequest' })}
              placeholder="GraphQL Query"
              style={{ fontSize: 12, height: '100%' }}
              theme={theme}
              value={state.request}
              width="100%"
            />
            <RequestTabbar
              onHeadersChange={(value) => dispatch({ payload: value, type: 'setHeaders' })}
              onVariablesChange={handleSetVariables}
            />
          </Stack>
          <Stack sx={{ width: '100%' }}>
            <CodeMirror
              editable={false}
              extensions={[json()]}
              height="440px"
              placeholder="GraphQL Response"
              style={{ fontSize: 12 }}
              theme={theme}
              value={state.response}
              width="100%"
            />
          </Stack>
        </Stack>
      </Container>
      <Snackbar
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        open={state.notificationText.length > 0}
      >
        <Alert onClick={handleSnackbarClose} severity="error">
          {state.notificationText}
        </Alert>
      </Snackbar>
    </>
  );
};
