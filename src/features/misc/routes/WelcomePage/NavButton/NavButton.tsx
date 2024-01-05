import { Link as RouterLink } from 'react-router-dom';

import { Button } from '@mui/material';

type NavButtonProps = {
  formMode?: string;
  textContent: string;
  to: string;
};

export const NavButton = ({ formMode, textContent, to }: NavButtonProps): JSX.Element => {
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
