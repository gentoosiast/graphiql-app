import type { JSX } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { Drawer, Typography } from '@mui/material';

import { useI18NContext } from '@/contexts/i18n';
import { isIntrospectionObjectType } from '@/features/graphiql/utils/introspection';

import { IntrospectionField, IntrospectionSchema, IntrospectionType } from '../../../types';
import { FieldFullInfo } from '../FieldFullInfo';
import { Header } from '../Header';
import { Nav } from '../Nav';
import { TypeInfo } from '../TypeInfo';
import { TypesList } from '../TypesList';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  schema: IntrospectionSchema;
  searchParams: URLSearchParams;
};

const DocsSection = ({ isOpen, onClose, schema, searchParams }: Props): JSX.Element => {
  const FIRST_HISTORY_STEP = useMemo(() => ({ name: 'Docs', path: '/main' }), []);
  let content: JSX.Element;

  const [type, setType] = useState<IntrospectionType | null>(null);
  const [field, setField] = useState<IntrospectionField | null>(null);
  const [history, setHistory] = useState<Record<string, string>[]>([FIRST_HISTORY_STEP]);

  const { translate } = useI18NContext();

  const setHistoryByCondition = useCallback(
    (path: string, name: string): void => {
      const isInHistory = history.some((h) => h.path === path);
      if (isInHistory) {
        return;
      }
      setHistory((history) => [...history, { name, path }]);
    },
    [], // eslint-disable-line react-hooks/exhaustive-deps
  );

  useEffect(() => {
    const typeName = searchParams.get('type');
    const fieldName = searchParams.get('field');

    const type = schema.types.find((t) => t.name === typeName);
    const url = '/main?' + searchParams.toString();

    if (fieldName && isIntrospectionObjectType(type) && type.fields instanceof Array) {
      const field = type.fields.find((f) => f.name === fieldName);
      if (field) {
        setField(field);
        setType(null);
        setHistoryByCondition(url, field.name);
      }
      return;
    }

    if (type) {
      setType(type);
      setField(null);
      setHistoryByCondition(url, type.name);
      return;
    }

    setType(null);
    setField(null);
    setHistory([FIRST_HISTORY_STEP]);
  }, [searchParams, schema.types, setHistoryByCondition, FIRST_HISTORY_STEP]);

  const removeLastHistoryStep = (): void =>
    setHistory((history) => history.slice(0, history.length - 2));

  if (type || field) {
    content = (
      <>
        <Header onDocsClose={onClose} t={translate}>
          <Nav
            backPath={history[history.length - 2]?.path}
            handleClick={removeLastHistoryStep}
            linkText={history[history.length - 2]?.name}
          />
        </Header>
        {type && !field && <TypeInfo type={type} />}
        {!type && field && <FieldFullInfo field={field} />}
      </>
    );
  } else {
    content = (
      <>
        <Header onDocsClose={onClose} t={translate}>
          <Typography color="primary" component="h3" variant="h4">
            {translate('docs.title')}
          </Typography>
        </Header>
        <TypesList queryTypeName={schema.queryType?.name || ''} types={schema.types} />
      </>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={isOpen}
      sx={{
        '& .MuiDrawer-paper': {
          backgroundImage: 'none',
          boxSizing: 'border-box',
          p: 2,
          pl: 3,
          width: '400px',
        },
        flexShrink: 0,
        overflowWrap: 'break-word',
        width: '400px',
      }}
    >
      {content}
    </Drawer>
  );
};

export default DocsSection;
