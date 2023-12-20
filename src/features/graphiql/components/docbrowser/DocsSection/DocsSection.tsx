import type { JSX } from 'react';
import { useState } from 'react';

import { Drawer, Typography } from '@mui/material';

import { IntrospectionField, IntrospectionSchema, IntrospectionType } from '../../../types';
import { AllTypes } from '../AllTypes';
import { FieldFullInfo } from '../FieldFullInfo';
import { Header } from '../Header';
import { Nav } from '../Nav';
import { TypeInfo } from '../TypeInfo';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  schema: IntrospectionSchema;
};

const DocsSection = ({ isOpen, onClose, schema }: Props): JSX.Element => {
  const [type, setType] = useState<IntrospectionType | null>(null);
  const [field, setField] = useState<IntrospectionField | null>(null);

  const DRAWER_WIDTH = '400px';

  let content: JSX.Element;

  const findAndSetType = (typeName: string): void => {
    const type = schema.types.find((t) => t.name === typeName) ?? null;
    if (type) {
      setType(type);
      setField(null);
    }
  };

  if (type) {
    content = (
      <>
        <Header onDocsClose={onClose}>
          <Nav clearState={() => setType(null)} />
        </Header>
        <TypeInfo
          findAndSetType={findAndSetType}
          setField={(field) => setField(field)}
          setType={(type) => setType(type)}
          type={type}
        />
      </>
    );
  } else if (field) {
    content = (
      <>
        <Header onDocsClose={onClose}>
          <Nav clearState={() => setField(null)} />
        </Header>
        <FieldFullInfo field={field} findAndSetType={findAndSetType} />
      </>
    );
  } else {
    content = (
      <>
        <Header onDocsClose={onClose}>
          <Typography color="primary" component="h3" variant="h4">
            Docs
          </Typography>
        </Header>
        <AllTypes
          findAndSetType={findAndSetType}
          queryTypeName={schema.queryType?.name || ''}
          setType={(type: IntrospectionType) => setType(type)}
          types={schema.types}
        />
      </>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      sx={{
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          p: 2,
          pl: 3,
          width: DRAWER_WIDTH,
        },
        flexShrink: 0,
        width: DRAWER_WIDTH,
      }}
      variant="persistent"
    >
      {content}
    </Drawer>
  );
};

export { DocsSection };
