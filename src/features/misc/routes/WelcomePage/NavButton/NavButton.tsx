import { Link as RouterLink } from 'react-router-dom';

import { Button } from '@mui/material';

export const NavButton = (to: string, textContent: string, formMode?: string): JSX.Element => {
  return (
    <Button
      component={RouterLink}
      state={{ formMode }}
      sx={{
        ':hover': {
          backgroundColor: 'primary.dark',
        },
        backgroundColor: 'primary.main',
        border: 1,
        color: 'primary.contrastText',
        fontSize: { lg: 16, xs: 14 },
        margin: 0.7,
        textDecoration: 'none',
        transition: '1s',
      }}
      to={to}
    >
      {textContent}
    </Button>
  );
};
