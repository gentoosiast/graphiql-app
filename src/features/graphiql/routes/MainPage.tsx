import type { JSX } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { json } from '@codemirror/lang-json';
import DescriptionIcon from '@mui/icons-material/Description';
import SendIcon from '@mui/icons-material/Send';
import {
  Alert,
  Button,
  Container,
  Fab,
  IconButton,
  Snackbar,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';
import { tokyoNightStormInit } from '@uiw/codemirror-theme-tokyo-night-storm';
import CodeMirror from '@uiw/react-codemirror';
import { isAxiosError } from 'axios';
import { graphql } from 'cm6-graphql';

import { useI18NContext } from '@/contexts/i18n';
import { AuthState, useAuth } from '@/features/auth';

import { getIntrospectionQuery } from '../api/get-introspection-query';
import { graphQLRequest } from '../api/requests';
import { PrettifyIcon, RequestTabbar } from '../components';
import { DocsSection } from '../components/docbrowser/DocsSection';
import { useMainPageReducer } from '../hooks/useMainPageReducer';
import { GraphQLResponse, IntrospectionResponse, IntrospectionSchema } from '../types';
import { prettify } from '../utils/prettify';

import 'hack-font/build/web/hack.css';

export const MainPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { translate } = useI18NContext();
  const { authState } = useAuth();
  const [state, dispatch] = useMainPageReducer();

  const [apiEndpoint, setApiEndpoint] = useState(state.endpoint);
  const [apiSchema, setApiSchema] = useState<IntrospectionSchema>({} as IntrospectionSchema);
  const [isDocsOpen, setIsDocsOpen] = useState(false);

  useEffect(() => {
    const getDocs = async (): Promise<void> => {
      const introspectionQuery = getIntrospectionQuery();

      try {
        const response = await graphQLRequest<IntrospectionResponse>({
          endpoint: state.endpoint,
          query: introspectionQuery,
        });

        setApiSchema(response.data.__schema);
      } catch (error) {
        console.error(error);
      }
    };
    void getDocs();
  }, [state.endpoint]);

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
      const response = await graphQLRequest<GraphQLResponse>({
        endpoint: state.endpoint,
        headers: state.headers,
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

  const handleSetHeaders = (headers: string): void => {
    try {
      const parsedHeaders: unknown = JSON.parse(headers);

      if (parsedHeaders && typeof parsedHeaders === 'object') {
        console.log(JSON.stringify(parsedHeaders));
        dispatch({ payload: parsedHeaders, type: 'setHeaders' });
      } else {
        throw new Error('Impossible to parse provided GraphQL headers');
      }
    } catch {
      dispatch({ payload: {}, type: 'setHeaders' });
    }
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
        <Tooltip title={translate('docs.show')}>
          <Button
            onClick={() => setIsDocsOpen(true)}
            sx={{
              maxHeight: '40px',
              maxWidth: '40px',
              mb: 2,
              minHeight: '40px',
              minWidth: '40px',
              mt: 2,
            }}
            variant="contained"
          >
            <DescriptionIcon />
          </Button>
        </Tooltip>

        <DocsSection isOpen={isDocsOpen} onClose={() => setIsDocsOpen(false)} schema={apiSchema} />

        <Stack
          direction={{ sm: 'row', xs: 'column' }}
          spacing={{ sm: 2, xs: 1 }}
          sx={{ height: '600px' }}
        >
          <Stack spacing={1} sx={{ height: '100%', position: 'relative', width: '100%' }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <TextField
                label={translate('graphqlEndpoint')}
                onBlur={(e) => dispatch({ payload: e.target.value, type: 'setEndpoint' })}
                onChange={(e) => setApiEndpoint(e.target.value)}
                placeholder={translate('graphqlEndpoint')}
                sx={{ width: '100%' }}
                value={apiEndpoint}
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
            <CodeMirror
              extensions={[graphql()]}
              height="100%"
              onChange={(value) => dispatch({ payload: value, type: 'setRequest' })}
              placeholder={translate('graphqlQuery')}
              style={{ fontSize: 12, height: '100%' }}
              theme={theme}
              value={state.request}
              width="100%"
            />
            <RequestTabbar
              onHeadersChange={handleSetHeaders}
              onVariablesChange={handleSetVariables}
            />
          </Stack>
          <Stack sx={{ height: '100%', width: '100%' }}>
            <CodeMirror
              editable={false}
              extensions={[json()]}
              height="100%"
              placeholder={translate('graphqlResponse')}
              style={{ fontSize: 12, height: '100%' }}
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
