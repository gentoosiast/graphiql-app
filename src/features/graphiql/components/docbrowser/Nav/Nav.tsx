import { Link as RouterLink } from 'react-router-dom';

import { Link } from '@mui/material';
import { Box } from '@mui/system';

import { useI18NContext } from '@/contexts/i18n';

type Props = {
  backPath: string;
  handleClick: () => void;
  linkText: string;
};

const Nav = ({ backPath, handleClick, linkText }: Props): JSX.Element => {
  const { translate } = useI18NContext();

  return (
    <Box
      component={RouterLink}
      onClick={handleClick}
      sx={{ color: 'inherit', cursor: 'pointer', textDecoration: 'none' }}
      to={backPath}
    >
      {'<'}
      <Link color="#fff" component="span" ml={1}>
        {backPath === '/main' ? translate('docs.title') : linkText}
      </Link>
    </Box>
  );
};

export { Nav };
