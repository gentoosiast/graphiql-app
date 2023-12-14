import type { JSX } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import SendIcon from '@mui/icons-material/Send';
import { Alert, Box, Container, Fab, IconButton, Snackbar, Stack, TextField } from '@mui/material';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { isAxiosError } from 'axios';

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
          <Stack spacing={1} sx={{ width: '100%' }}>
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

            <Box
              sx={{
                height: '440px',
                overflow: 'auto',
              }}
            >
              <CodeEditor
                data-color-mode="dark"
                language="graphql"
                minHeight={440}
                onChange={(e) => dispatch({ payload: e.target.value, type: 'setRequest' })}
                placeholder="GraphQL Query"
                style={{
                  fontFamily: 'Hack, monospace',
                  width: '100%',
                }}
                value={state.request}
              />
            </Box>
            <RequestTabbar
              onHeadersChange={(value) => dispatch({ payload: value, type: 'setHeaders' })}
              onVariablesChange={handleSetVariables}
            />
          </Stack>
          <CodeEditor
            data-color-mode="dark"
            language="json"
            minHeight={440}
            placeholder="GraphQL Response"
            readOnly
            style={{
              fontFamily: 'Hack, monospace',
              height: '440px',
              overflow: 'auto',
              width: '100%',
            }}
            value={state.response}
          />
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
