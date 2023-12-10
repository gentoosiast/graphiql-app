import type { JSX } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Alert, Button, Snackbar, Stack, TextField } from '@mui/material';
import CodeEditor from '@uiw/react-textarea-code-editor';

import { AuthState, useAuth } from '@/features/auth';

import { graphQLRequest } from '../api/requests';
import { useMainPageReducer } from '../hooks/useMainPageReducer';

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
      });

      dispatch({ payload: response, type: 'setResponse' });
    } catch (error) {
      console.error(error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';

      dispatch({ payload: errorMessage, type: 'setError' });
    }
  };

  const handleSnackbarClose = (): void => {
    dispatch({
      payload: { message: '', severity: 'info' },
      type: 'setNotification',
    });
  };

  return (
    <>
      <TextField
        label="GraphQL endpoint"
        onChange={(e) => dispatch({ payload: e.target.value, type: 'setEndpoint' })}
        placeholder="GraphQL endpoint"
        value={state.endpoint}
      />
      <Button onClick={() => void handleSendRequest()}>Send Request</Button>
      <Stack direction="row" spacing={2}>
        <CodeEditor
          data-color-mode="dark"
          language="graphql"
          minHeight={440}
          onChange={(e) => dispatch({ payload: e.target.value, type: 'setRequest' })}
          placeholder="GraphQL query"
          rows={20}
          style={{ width: '100%' }}
          value={state.request}
        />
        <CodeEditor
          data-color-mode="dark"
          language="json"
          minHeight={440}
          placeholder="GraphQL Response"
          readOnly
          rows={20}
          style={{ width: '100%' }}
          value={state.response}
        />
      </Stack>
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
