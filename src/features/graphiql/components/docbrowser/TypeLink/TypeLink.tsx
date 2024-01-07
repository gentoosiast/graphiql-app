import type { JSX, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Link } from '@mui/material';

type Props = {
  children: ReactNode;
  to: string;
};

const TypeLink = ({ children, to }: Props): JSX.Element => {
  return (
    <Link
      component={RouterLink}
      sx={{ cursor: 'pointer', fontWeight: 500 }}
      to={to}
      underline="hover"
    >
      {children}
    </Link>
  );
};

export { TypeLink };
