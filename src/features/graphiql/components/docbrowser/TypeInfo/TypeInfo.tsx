import type { JSX } from 'react';

import { List, ListItem, Typography } from '@mui/material';

import { useI18NContext } from '@/contexts/i18n';

import type { IntrospectionType } from '../../../types';

import { getInterfaceObject, isIntrospectionObjectType } from '../../../utils/introspection';
import { FieldItem } from '../FieldItem';
import { TypeLink } from '../TypeLink';

const TypeInfo = ({ type }: { type: IntrospectionType }): JSX.Element => {
  const { translate } = useI18NContext();

  const interfaceObject = getInterfaceObject(type);

  return (
    <>
      <Typography component="h4" mt={2} variant="h4">
        {type.name}
      </Typography>
      {type.description && <Typography mt={2}>{type.description}</Typography>}

      {interfaceObject && (
        <>
          <Typography component="h5" mb={1} mt={2} variant="subtitle2">
            {translate('docs.implements')}
          </Typography>
          <TypeLink to={`/main?type=${interfaceObject.name}`}>{interfaceObject.name}</TypeLink>
        </>
      )}

      {isIntrospectionObjectType(type) && type.fields instanceof Array && (
        <>
          <Typography component="h5" mb={1} mt={2} variant="subtitle2">
            {translate('docs.fields')}
          </Typography>
          <List>
            {type.fields.map((field) => (
              <ListItem disablePadding key={field.name} sx={{ display: 'block', mb: 3 }}>
                <FieldItem belongsToType={type.name} field={field} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    </>
  );
};

export { TypeInfo };
