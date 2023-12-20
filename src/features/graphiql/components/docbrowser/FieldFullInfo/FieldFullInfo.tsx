import type { JSX } from 'react';

import { Typography } from '@mui/material';

import { IntrospectionField } from '../../../types';
import { getTypeName } from '../../../utils/introspection';
import { TypeLink } from '../TypeLink';

type Props = {
  field: IntrospectionField;
  findAndSetType: (typeName: string) => void;
};

const FieldFullInfo = ({ field, findAndSetType }: Props): JSX.Element => {
  const fieldType = getTypeName(field.type);

  return (
    <>
      <Typography component="h4" mt={2} variant="h4">
        {field.name}
      </Typography>
      {field.description && <Typography mt={2}>{field.description}</Typography>}

      <Typography component="h5" mb={1} mt={2} variant="subtitle2">
        Type
      </Typography>
      <TypeLink onClick={() => findAndSetType(fieldType)}>{fieldType}</TypeLink>
    </>
  );
};

export { FieldFullInfo };
