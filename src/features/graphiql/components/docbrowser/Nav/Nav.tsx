import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import { useI18NContext } from '@/contexts/i18n';

type Props = {
  clearState: () => void;
};

const Nav = ({ clearState }: Props): JSX.Element => {
  const { translate } = useI18NContext();

  return (
    <Box onClick={clearState} sx={{ cursor: 'pointer' }}>
      {'<'}
      <Typography component="span" sx={{ ':hover': { textDecoration: 'underline' }, ml: 1 }}>
        {translate('docs.title')}
      </Typography>
    </Box>
  );
};

export { Nav };
