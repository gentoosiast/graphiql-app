import type { JSX } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Link, List, Typography } from '@mui/material';

import { IntrospectionField } from '../../../types';
import { getTypeName } from '../../../utils/introspection';
import { ArgItem } from '../ArgItem';
import { TypeLink } from '../TypeLink';

type Props = {
  belongsToType: string;
  field: IntrospectionField;
};

const FieldItem = ({ belongsToType, field }: Props): JSX.Element => {
  const fieldType = getTypeName(field.type);

  return (
    <>
      <Link
        color="#007deb"
        component={RouterLink}
        gutterBottom
        sx={{ cursor: 'pointer', fontWeight: 500 }}
        to={`/main?type=${belongsToType}&field=${field.name}`}
        underline="hover"
      >
        {field.name}
      </Link>
      {field.args?.length > 0 && (
        <>
          {' ('}
          <List disablePadding>
            {field.args.map((arg) => (
              <ArgItem arg={arg} key={arg.name} />
            ))}
          </List>
          {')'}
        </>
      )}
      {': '}
      <TypeLink to={`/main?type=${fieldType}`}>{fieldType}</TypeLink>
      {field.description && (
        <Typography mt={1} variant="body2">
          {field.description}
        </Typography>
      )}
    </>
  );
};

export { FieldItem };
