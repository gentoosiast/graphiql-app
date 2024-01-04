import { Typography } from '@mui/material';
import { Stack } from '@mui/system';

import { useI18NContext } from '@/contexts/i18n';

export const PetCard = (src: string, nameToTranslate: string): JSX.Element => {
  const { translate } = useI18NContext();

  return (
    <Stack justifyContent="space-between" sx={{ maxWidth: 170 }}>
      <img alt={`${nameToTranslate} cat`} src={src} />
      <Typography align="center" component="h4" variant="h5">
        {translate(nameToTranslate)}
      </Typography>
    </Stack>
  );
};
