import { Typography } from '@mui/material';

type Props = {
  clearState: () => void;
};

const Nav = ({ clearState }: Props): JSX.Element => {
  return (
    <div>
      {'<'}
      <Typography
        component="span"
        onClick={clearState}
        sx={{ ':hover': { textDecoration: 'underline' }, cursor: 'pointer', ml: 1 }}
      >
        {'Docs'}
      </Typography>
    </div>
  );
};

export { Nav };
