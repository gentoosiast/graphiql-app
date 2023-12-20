import type { JSX } from 'react';

import { List, ListItem, Typography } from '@mui/material';

import type { IntrospectionField, IntrospectionType } from '../../../types';

import { getIterfaceObject, isIntrospectionObjectType } from '../../../utils/introspection';
import { FieldItem } from '../FieldItem';
import { TypeLink } from '../TypeLink';

type Props = {
  findAndSetType: (typeName: string) => void;
  setField: (field: IntrospectionField | null) => void;
  setType: (type: IntrospectionType | null) => void;
  type: IntrospectionType;
};

const TypeInfo = ({ findAndSetType, setField, setType, type }: Props): JSX.Element => {
  const interfaceObject = getIterfaceObject(type);

  return (
    <>
      <Typography component="h4" mt={2} variant="h4">
        {type.name}
      </Typography>
      {type.description && <Typography mt={2}>{type.description}</Typography>}

      {interfaceObject && (
        <>
          <Typography component="h5" mb={1} mt={2} variant="subtitle2">
            Implements
          </Typography>
          <TypeLink onClick={() => findAndSetType(interfaceObject.name)}>
            {interfaceObject.name}
          </TypeLink>
        </>
      )}

      {isIntrospectionObjectType(type) && (
        <>
          <Typography component="h5" mb={1} mt={2} variant="subtitle2">
            Fields
          </Typography>
          <List>
            {type.fields.map((field) => (
              <ListItem disablePadding key={field.name} sx={{ display: 'block', mb: 3 }}>
                <FieldItem
                  field={field}
                  findAndSetType={findAndSetType}
                  setField={setField}
                  setType={setType}
                />
              </ListItem>
            ))}
          </List>
        </>
      )}
    </>
  );
};

export { TypeInfo };
