import type { JSX } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Button, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';

import { useI18NContext } from '@/contexts/i18n';

export const NotFoundPage = (): JSX.Element => {
  const { translate } = useI18NContext();
  return (
    <Box padding={'2%'}>
      <Typography align="center" component={'h1'} variant="h1">
        {translate('ohHello')}
      </Typography>

      <Stack flexDirection={'row'} justifyContent={'space-evenly'} width={'100%'}>
        <img alt="cat on the table" src="/not-found-2.jpg" width={'30%'} />
        <img alt="cat on the table taking a shower" src="/not-found.jpg" width={'30%'} />
      </Stack>
      <Typography align="center" component={'h4'} mt={3} variant="h5">
        {translate('busy')}
      </Typography>
      <Stack alignItems={'center'} justifyContent={'center'}>
        <Typography
          align="center"
          component={'h4'}
          fontSize="22"
          maxWidth={'80%'}
          mt={3}
          variant="h5"
        >
          {translate('goAway')}
        </Typography>
        <Button
          component={RouterLink}
          sx={{
            ':hover': {
              backgroundColor: 'primary.light',
            },
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            fontSize: 22,
            maxWidth: '40%',
            mt: 2,
          }}
          to="/"
        >
          {translate('welcomePage')}
        </Button>
      </Stack>
    </Box>
  );
};
