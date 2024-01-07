import { Typography } from '@mui/material';
import { Stack } from '@mui/system';

type PetCardProps = {
  name: string;
  src: string;
};

export const PetCard = ({ name, src }: PetCardProps): JSX.Element => {
  return (
    <Stack justifyContent="space-between" sx={{ maxWidth: 170 }}>
      <img alt={`${name} cat`} src={src} />
      <Typography align="center" component="h4" variant="h5">
        {name}
      </Typography>
    </Stack>
  );
};
