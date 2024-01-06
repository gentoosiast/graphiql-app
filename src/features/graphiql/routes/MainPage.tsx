import type { JSX } from 'react';
import { lazy, useDeferredValue, useRef, useState } from 'react';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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

import { useI18NContext } from '@/contexts/i18n';
import { useAppDispatch, useAppSelector } from '@/store';

import { Editor, PrettifyIcon, RequestTabbar } from '../components';
import { NOTIFICATION_TIMEOUT } from '../constants';
import {
  setEndpoint,
  setError,
  setNotification,
  setRequest,
  setResponse,
  useGraphQLMutation,
} from '../store';
import { IntrospectionResponse, IntrospectionSchema } from '../types';
import { graphqlPrettify, jsonPrettify, processApiResponse } from '../utils';

const DocsSection = lazy(async () => {
  const { DocsSection } = await import('../components/docbrowser/DocsSection');
  return { default: DocsSection };
});

export const MainPage = (): JSX.Element => {
  const { translate } = useI18NContext();
  const [sendGraphQLRequest, { isLoading }] = useGraphQLMutation();
  const [sendIntrospectionRequest] = useGraphQLMutation();

  const dispatch = useAppDispatch();

  const endpoint = useAppSelector((state) => state.graphiql.endpoint);
  const request = useAppSelector((state) => state.graphiql.request);
  const response = useAppSelector((state) => state.graphiql.response);
  const notificationText = useAppSelector((state) => state.graphiql.notificationText);

  const [apiSchema, setApiSchema] = useState<IntrospectionSchema | null>(null);
  const [isDocsOpen, setIsDocsOpen] = useState(false);

  const deferredApiSchema = useDeferredValue(apiSchema);

  const endpointInputRef = useRef<HTMLInputElement | null>(null);

  const getDocs = async (): Promise<void> => {
    setApiSchema(null);

    const response = await sendIntrospectionRequest({});
    const { data, errorMessage, isSuccess } = processApiResponse(response);

    if (isSuccess) {
      const introspectionResponse = data as IntrospectionResponse;

      setApiSchema(introspectionResponse.data.__schema);
    } else {
      dispatch(setError({ errorMessage, errorResponse: '' }));
      setApiSchema(null);
    }
  };

  const handleSendRequest = async (): Promise<void> => {
    const response = await sendGraphQLRequest({
      query: request,
    });
    const { data, errorMessage, isSuccess } = processApiResponse(response);

    if (isSuccess) {
      dispatch(setResponse(jsonPrettify(data)));
    } else {
      dispatch(setError({ errorMessage, errorResponse: data ? jsonPrettify(data) : '' }));
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
                InputProps={{
                  endAdornment: (
                    <Tooltip title={translate('changeEndpoint')}>
                      <IconButton
                        aria-label={translate('changeEndpoint')}
                        onClick={() => {
                          const endpoint = endpointInputRef.current?.value ?? '';
                          dispatch(setEndpoint(endpoint));
                          void getDocs();
                        }}
                      >
                        <CheckCircleIcon />
                      </IconButton>
                    </Tooltip>
                  ),
                }}
                defaultValue={endpoint}
                inputRef={endpointInputRef}
                label={translate('graphqlEndpoint')}
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
                  aria-disabled={isLoading}
                  aria-label={translate('sendRequest')}
                  color="primary"
                  disabled={isLoading}
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
