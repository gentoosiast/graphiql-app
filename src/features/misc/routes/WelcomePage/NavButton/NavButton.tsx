import { Link as RouterLink } from 'react-router-dom';

import { Button } from '@mui/material';

import { useI18NContext } from '@/contexts/i18n';
export const NavButton = (
  to: string,
  actionToTranslate: string,
  formMode?: string,
): JSX.Element => {
  const { translate } = useI18NContext();

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
      {translate(actionToTranslate)}
    </Button>
  );
};
