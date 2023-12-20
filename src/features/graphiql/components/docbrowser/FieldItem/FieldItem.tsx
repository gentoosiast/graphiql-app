import type { JSX } from 'react';

import { Link, List, Typography } from '@mui/material';

import { IntrospectionField, IntrospectionType } from '../../../types';
import { getTypeName } from '../../../utils/introspection';
import { ArgItem } from '../ArgItem';
import { TypeLink } from '../TypeLink';

type Props = {
  field: IntrospectionField;
  findAndSetType: (typeName: string) => void;
  setField: (field: IntrospectionField | null) => void;
  setType: (type: IntrospectionType | null) => void;
};

const FieldItem = ({ field, findAndSetType, setField, setType }: Props): JSX.Element => {
  const fieldType = getTypeName(field.type);

  return (
    <>
      <Link
        color="#007deb"
        gutterBottom
        onClick={() => {
          setField(field);
          setType(null);
        }}
        sx={{ cursor: 'pointer', fontWeight: 500 }}
        underline="hover"
      >
        {field.name}
      </Link>
      {field.args?.length > 0 && (
        <>
          {' ('}
          <List disablePadding>
            {field.args.map((arg) => (
              <ArgItem arg={arg} findAndSetType={findAndSetType} key={arg.name} />
            ))}
          </List>
          {')'}
        </>
      )}
      {': '}
      <TypeLink onClick={() => findAndSetType(fieldType)}>{fieldType}</TypeLink>
      {field.description && (
        <Typography mt={1} variant="body2">
          {field.description}
        </Typography>
      )}
    </>
  );
};

export { FieldItem };
