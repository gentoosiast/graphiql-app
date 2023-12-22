import type { JSX } from 'react';
import { useEffect, useRef } from 'react';

import SendIcon from '@mui/icons-material/Send';
import {
  Alert,
  Box,
  Container,
  Fab,
  IconButton,
  Snackbar,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';
import { isAxiosError } from 'axios';

import { useI18NContext } from '@/contexts/i18n';

import { graphQLRequest } from '../api/graphqlApi';
import { Editor, PrettifyIcon, RequestTabbar } from '../components';
import { NOTIFICATION_TIMEOUT } from '../constants';
import { useMainPageReducer } from '../hooks/useMainPageReducer';
import { graphqlPrettify, jsonPrettify, parseEditorCodeToObject } from '../utils';

export const MainPage = (): JSX.Element => {
  const { translate } = useI18NContext();
  const [state, dispatch] = useMainPageReducer();
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const handleSendRequest = async (): Promise<void> => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const abortController = new AbortController();

    abortControllerRef.current = abortController;

    try {
      const response = await graphQLRequest<{ data: unknown }>({
        endpoint: state.endpoint,
        headers: parseEditorCodeToObject(state.headers, 'GraphQL headers'),
        query: state.request,
        signal: abortController.signal,
        variables: parseEditorCodeToObject(state.variables, 'GraphQL variables'),
      });

      const responseJSON = jsonPrettify(response.data);

      dispatch({ payload: responseJSON, type: 'setResponse' });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';

      if (isAxiosError(error)) {
        const errorJSON = jsonPrettify(error.response?.data);

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
    dispatch({ payload: graphqlPrettify(state.request), type: 'setRequest' });
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ paddingBlock: '2rem' }}>
        <Box
          display="grid"
          gap="1rem"
          gridAutoColumns="minmax(0, 1fr)"
          gridAutoFlow={{ md: 'column', sm: 'row' }}
          gridTemplateRows={{ md: '600px', sm: 'repeat(2, 600px)' }}
        >
          <Stack spacing={1} sx={{ height: '100%', position: 'relative', width: '100%' }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <TextField
                label={translate('graphqlEndpoint')}
                onChange={(e) => dispatch({ payload: e.target.value, type: 'setEndpoint' })}
                placeholder={translate('graphqlEndpoint')}
                sx={{ width: '100%' }}
                value={state.endpoint}
              />
              <Tooltip title={translate('prettifyQuery')}>
                <IconButton
                  aria-label={translate('prettifyQuery')}
                  color="default"
                  onClick={handlePrettify}
                >
                  <PrettifyIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title={translate('sendRequest')}>
                <Fab
                  aria-label={translate('sendRequest')}
                  color="primary"
                  onClick={() => void handleSendRequest()}
                  size="small"
                >
                  <SendIcon />
                </Fab>
              </Tooltip>
            </Stack>
            <Editor
              editorMode="graphql"
              height="100%"
              onChange={(value) => dispatch({ payload: value, type: 'setRequest' })}
              placeholder={translate('graphqlQuery')}
              style={{ flexGrow: '1', height: '100%', overflow: 'auto' }}
              value={state.request}
              width="100%"
            />
            <RequestTabbar
              headers={state.headers}
              onHeadersChange={(value) => dispatch({ payload: value, type: 'setHeaders' })}
              onVariablesChange={(value) => dispatch({ payload: value, type: 'setVariables' })}
              variables={state.variables}
            />
          </Stack>
          <Stack sx={{ height: '100%', width: '100%' }}>
            <Editor
              editable={false}
              editorMode="json"
              height="100%"
              placeholder={translate('graphqlResponse')}
              style={{ height: '100%' }}
              value={state.response}
              width="100%"
            />
          </Stack>
        </Box>
      </Container>
      <Snackbar
        autoHideDuration={NOTIFICATION_TIMEOUT}
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
