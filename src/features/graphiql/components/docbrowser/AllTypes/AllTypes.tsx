import type { JSX } from 'react';

import { List, ListItem, Typography } from '@mui/material';
import { Stack } from '@mui/system';

import { IntrospectionType } from '../../../types';
import { TypeLink } from '../TypeLink';

type Props = {
  findAndSetType: (typeName: string) => void;
  queryTypeName: string;
  setType: (type: IntrospectionType) => void;
  types: ReadonlyArray<IntrospectionType>;
};

const AllTypes = ({ findAndSetType, queryTypeName, setType, types = [] }: Props): JSX.Element => {
  return (
    <>
      <Typography mb={2} mt={2}>
        A GraphQL schema provides a root type for each kind of operation.
      </Typography>
      <Typography component="h5" variant="subtitle2">
        Root Types
      </Typography>
      <Stack direction="row" mb={2} mt={2} spacing={1}>
        <Typography color="#007deb" fontWeight={500}>
          query:
        </Typography>
        <TypeLink onClick={() => findAndSetType(queryTypeName)}>{queryTypeName}</TypeLink>
      </Stack>
      <Typography component="h5" variant="subtitle2">
        All Schema Types
      </Typography>
      <List>
        {types
          .filter(
            (type: IntrospectionType) => type.name !== queryTypeName && !type.name.startsWith('__'),
          )
          .map((type: IntrospectionType) => (
            <ListItem disablePadding key={type.name}>
              <TypeLink onClick={() => setType(type)}>{type.name}</TypeLink>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export { AllTypes };
