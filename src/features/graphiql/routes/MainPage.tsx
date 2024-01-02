import type { JSX } from 'react';
import { lazy, useDeferredValue, useEffect, useRef, useState } from 'react';

import DescriptionIcon from '@mui/icons-material/Description';
import SendIcon from '@mui/icons-material/Send';
import {
  Alert,
  Box,
  Button,
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
import { useAppDispatch, useAppSelector } from '@/store';

import { getIntrospectionQuery } from '../api/get-introspection-query';
import { graphQLRequest } from '../api/graphqlApi';
import { Editor, PrettifyIcon, RequestTabbar } from '../components';
import { NOTIFICATION_TIMEOUT } from '../constants';
import { setEndpoint, setError, setNotification, setRequest, setResponse } from '../store';
import { IntrospectionResponse, IntrospectionSchema } from '../types';
import { graphqlPrettify, jsonPrettify, parseEditorCodeToObject } from '../utils';

const DocsSection = lazy(async () => {
  const { DocsSection } = await import('../components/docbrowser/DocsSection');
  return { default: DocsSection };
});

export const MainPage = (): JSX.Element => {
  const { translate } = useI18NContext();

  const dispatch = useAppDispatch();

  const endpoint = useAppSelector((state) => state.graphiql.endpoint);
  const request = useAppSelector((state) => state.graphiql.request);
  const response = useAppSelector((state) => state.graphiql.response);
  const headers = useAppSelector((state) => state.graphiql.headers);
  const variables = useAppSelector((state) => state.graphiql.variables);
  const notificationText = useAppSelector((state) => state.graphiql.notificationText);

  const [apiSchema, setApiSchema] = useState<IntrospectionSchema | null>(null);
  const [isDocsOpen, setIsDocsOpen] = useState(false);

  const deferredApiSchema = useDeferredValue(apiSchema);

  useEffect(() => {
    const getDocs = async (): Promise<void> => {
      const introspectionQuery = getIntrospectionQuery();

      try {
        const response = await graphQLRequest<IntrospectionResponse>({
          endpoint,
          query: introspectionQuery,
        });

        setApiSchema(response.data.__schema);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        dispatch(setError({ errorMessage, errorResponse: '' }));
      }
    };
    void getDocs();
  }, [endpoint, dispatch]);

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
        endpoint,
        headers: parseEditorCodeToObject(headers, 'GraphQL headers'),
        query: request,
        signal: abortController.signal,
        variables: parseEditorCodeToObject(variables, 'GraphQL variables'),
      });

      const responseJSON = jsonPrettify(response.data);

      dispatch(setResponse(responseJSON));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';

      if (isAxiosError(error)) {
        const errorJSON = jsonPrettify(error.response?.data);

        dispatch(setError({ errorMessage, errorResponse: errorJSON }));
      } else {
        dispatch(setError({ errorMessage, errorResponse: '' }));
      }
    }
  };

  const handleSnackbarClose = (): void => {
    dispatch(setNotification({ message: '', severity: 'info' }));
  };

  const handlePrettify = (): void => {
    dispatch(setRequest(graphqlPrettify(request)));
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ paddingBlock: '2rem', position: 'relative' }}>
        {deferredApiSchema && (
          <>
            <Tooltip title={translate('docs.show')}>
              <Button
                onClick={() => setIsDocsOpen(true)}
                sx={{
                  maxHeight: '40px',
                  maxWidth: '40px',
                  minHeight: '40px',
                  minWidth: '40px',
                  position: 'absolute',
                  top: '2rem',
                }}
                variant="contained"
              >
                <DescriptionIcon />
              </Button>
            </Tooltip>

            <DocsSection
              isOpen={isDocsOpen}
              onClose={() => setIsDocsOpen(false)}
              schema={deferredApiSchema}
            />
          </>
        )}

        <Box
          display="grid"
          gap="1rem"
          gridAutoColumns="minmax(0, 1fr)"
          gridAutoFlow={{ md: 'column', sm: 'row' }}
          gridTemplateRows={{ md: '600px', sm: 'repeat(2, 600px)' }}
          pt="4rem"
        >
          <Stack spacing={1} sx={{ height: '100%', position: 'relative', width: '100%' }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <TextField
                defaultValue={endpoint}
                label={translate('graphqlEndpoint')}
                onBlur={(e) => dispatch(setEndpoint(e.target.value))}
                placeholder={translate('graphqlEndpoint')}
                sx={{ width: '100%' }}
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
              onChange={(value) => dispatch(setRequest(value))}
              placeholder={translate('graphqlQuery')}
              style={{ flexGrow: '1', height: '100%', overflow: 'auto' }}
              value={request}
              width="100%"
            />
            <RequestTabbar />
          </Stack>
          <Stack sx={{ height: '100%', width: '100%' }}>
            <Editor
              editable={false}
              editorMode="json"
              height="100%"
              placeholder={translate('graphqlResponse')}
              style={{ height: '100%' }}
              value={response}
              width="100%"
            />
          </Stack>
        </Box>
      </Container>
      <Snackbar
        autoHideDuration={NOTIFICATION_TIMEOUT}
        onClose={handleSnackbarClose}
        open={notificationText.length > 0}
      >
        <Alert onClick={handleSnackbarClose} severity="error">
          {notificationText}
        </Alert>
      </Snackbar>
    </>
  );
};
