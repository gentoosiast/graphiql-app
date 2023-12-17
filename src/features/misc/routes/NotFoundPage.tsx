import type { JSX } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Button, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';

import { useI18NContext } from '@/contexts/i18n';

export const NotFoundPage = (): JSX.Element => {
  const { translate } = useI18NContext();

  const responsiveBox = {
    flex: { md: 'calc(33% - 20px)', sm: 'calc(50% - 20px)', xs: '100%' },
  };
  const responsiveTitle = {
    fontSize: { md: '62px', sm: '50px', xs: '36px' },
    margin: 2,
  };
  const responsiveText = {
    fontSize: { md: '22px', sm: '20px', xs: '18px' },
    marginTop: { md: 1.5, sm: 2, sx: 2 },
  };
  const responsiveButton = {
    ':hover': {
      backgroundColor: 'primary.light',
    },
    backgroundColor: 'primary.main',
    color: 'primary.contrastText',
    fontSize: { lg: '20px', md: '18px', sm: '16px' },
    mb: 5,
    mt: 2,
    padding: { lg: '0 3%', md: '0 3%', sm: '0 10%' },
    textAlign: 'center',
  };

  const responsiveCat = {
    width: { md: '25%', sm: '20%', xs: '15%' },
  };

  return (
    <Box padding={'1% 5%'} sx={responsiveBox}>
      <Typography align="center" component={'h1'} sx={responsiveTitle} variant="h1">
        {translate('ohHello')}
      </Typography>
      <Stack direction={'row'} flexWrap="wrap" justifyContent={'center'} spacing={5} useFlexGap>
        <Box minWidth={'250px'} sx={responsiveCat}>
          <img
            alt="cat on the table"
            height={'100%'}
            src="/not-found-2.jpg"
            style={{ objectFit: 'cover' }}
            width={'100%'}
          />
        </Box>
        <Box minWidth={'250px'} sx={responsiveCat}>
          <img
            alt="cat on the table taking a shower"
            height={'100%'}
            src="/not-found.jpg"
            style={{ objectFit: 'cover' }}
            width={'100%'}
          />
        </Box>
      </Stack>

      <Stack alignItems={'center'} justifyContent={'center'}>
        <Typography align="center" component={'h4'} mt={3} sx={responsiveText} variant="h5">
          {translate('busy')}
        </Typography>
        <Typography
          align="center"
          component={'h4'}
          maxWidth={'80%'}
          sx={responsiveText}
          variant="h5"
        >
          {translate('goAway')}
        </Typography>
        <Button component={RouterLink} replace={true} sx={responsiveButton} to="/">
          {translate('welcomePage')}
        </Button>
      </Stack>
    </Box>
  );
};
