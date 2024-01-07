import type { JSX } from 'react';

import { ListItem, Typography } from '@mui/material';

import { IntrospectionInputValue } from '../../../types';
import { getTypeName } from '../../../utils/introspection';
import { TypeLink } from '../TypeLink';

type Props = {
  arg: IntrospectionInputValue;
};

const ArgItem = ({ arg }: Props): JSX.Element => {
  const argType = getTypeName(arg.type);

  return (
    <ListItem disablePadding sx={{ ml: 1.5 }}>
      <Typography color="#ba68e7" fontWeight={500}>
        {arg.name}
      </Typography>
      <div style={{ marginRight: '5px' }}>{':'}</div>
      <TypeLink to={`/main?type=${argType}`}>{argType}</TypeLink>
    </ListItem>
  );
};

export { ArgItem };
