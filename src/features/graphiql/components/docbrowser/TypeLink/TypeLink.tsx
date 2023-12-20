import type { JSX, ReactNode } from 'react';

import { Link } from '@mui/material';

type Props = {
  children: ReactNode;
  onClick: () => void;
};

const TypeLink = ({ children, onClick }: Props): JSX.Element => {
  return (
    <Link onClick={onClick} sx={{ cursor: 'pointer', fontWeight: 500 }} underline="hover">
      {children}
    </Link>
  );
};

export { TypeLink };
