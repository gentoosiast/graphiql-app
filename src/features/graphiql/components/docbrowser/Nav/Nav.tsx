import { Typography } from '@mui/material';

import { useI18NContext } from '@/contexts/i18n';

type Props = {
  clearState: () => void;
};

const Nav = ({ clearState }: Props): JSX.Element => {
  const { translate } = useI18NContext();

  return (
    <div>
      {'<'}
      <Typography
        component="span"
        onClick={clearState}
        sx={{ ':hover': { textDecoration: 'underline' }, cursor: 'pointer', ml: 1 }}
      >
        {translate('docs.title')}
      </Typography>
    </div>
  );
};

export { Nav };
