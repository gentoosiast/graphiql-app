import type { JSX } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Alert, Button, Snackbar, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import CodeEditor from '@uiw/react-textarea-code-editor';

import { AuthState, useAuth } from '@/features/auth';

import { graphQLRequest } from '../api/requests';

export const MainPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { authState } = useAuth();
  const [endpoint, setEndpoint] = useState('https://graphql.anilist.co');
  const [request, setRequest] = useState('');
  const [response, setResponse] = useState('');
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    if (authState === AuthState.NOT_AUTHENTICATED) {
      navigate('/');
    }
  }, [authState, navigate]);

  const handleSendRequest = async (): Promise<void> => {
    console.log(endpoint);
    console.log(request);
    try {
      const response = await graphQLRequest({
        endpoint,
        query: request,
      });
      setResponse(response);
    } catch (error) {
      console.error(error);
      setResponse('');
      setNotification((error as Error).message);
      setIsNotificationVisible(true);
    }
  };

  const handleSnackbarClose = (): void => {
    setIsNotificationVisible(false);
  };

  return (
    <>
      <TextField
        label="GraphQL endpoint"
        onChange={(e) => setEndpoint(e.target.value)}
        placeholder="GraphQL endpoint"
        value={endpoint}
      />
      <Button onClick={() => void handleSendRequest()}>Send Request</Button>
      <Stack direction="row" spacing={2}>
        <CodeEditor
          data-color-mode="dark"
          language="graphql"
          minHeight={440}
          onChange={(e) => setRequest(e.target.value)}
          placeholder="GraphQL query"
          rows={20}
          style={{ width: '100%' }}
          value={request}
        />
        <CodeEditor
          data-color-mode="dark"
          language="json"
          minHeight={440}
          placeholder="GraphQL Response"
          readOnly
          rows={20}
          style={{ width: '100%' }}
          value={response}
        />
      </Stack>
      <Snackbar autoHideDuration={5000} onClose={handleSnackbarClose} open={isNotificationVisible}>
        <Alert onClick={handleSnackbarClose} severity="error">
          {notification}
        </Alert>
      </Snackbar>
    </>
  );
};
