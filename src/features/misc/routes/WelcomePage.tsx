import type { JSX } from 'react';
import { Link } from 'react-router-dom';

import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';

import { MemberCard } from '@/components/MemberCard';
import { useI18NContext } from '@/contexts/i18n';
import { developers } from '@/features/data/developers';

export const WelcomePage = (): JSX.Element => {
  const { translate } = useI18NContext();

  return (
    <Box
      alignItems={'center'}
      display={'flex'}
      flexDirection={'column'}
      flexWrap={'wrap'}
      justifyContent={'center'}
      padding={'3%'}
      width={'100%'}
    >
      <nav>
        <Link state={{ formMode: 'login' }} to="/auth">
          Sign In
        </Link>
        <Link state={{ formMode: 'register' }} to="/auth">
          Sign Up
        </Link>
        <Link to="/main">Main Page</Link>
      </nav>
      <Stack alignItems="center" justifyContent="center">
        <Typography
          component="h1"
          sx={{ fontSize: { lg: 60, md: 56, sm: 45, xs: 30 }, margin: '2%' }}
          variant="h2"
        >
          {translate('meetTheTeam')}
        </Typography>

        <Typography
          color="primary"
          component="h2"
          sx={{ fontSize: { lg: 80, md: 66, sm: 55, xs: 40 } }}
          textAlign="center"
          variant="h2"
        >
          San Junipero
        </Typography>
        <Typography
          sx={{
            fontSize: 20,
            margin: '5%',

            width: { lg: '60%', md: '85%', sm: '90%', xs: '100%' },
          }}
        >
          {translate('team-description')}
        </Typography>
      </Stack>
      <Box
        display={'flex'}
        flexWrap={'wrap'}
        justifyContent={{ lg: 'space-evenly', md: 'space-evenly', sm: 'center' }}
        padding={'3%'}
        width={'100%'}
      >
        {developers.map((developer) => (
          <MemberCard developer={developer} key={`${developer.name}`} />
        ))}
      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        padding={'3%'}
        width={'100%'}
      >
        <Typography align="center" component="h3" variant="h2">
          {translate('ourPets')}
        </Typography>

        <Box
          display={'flex'}
          flexWrap={'wrap'}
          justifyContent={{ lg: 'space-evenly', md: 'space-evenly', sm: 'center' }}
          padding={'3%'}
          width={'100%'}
        >
          <Stack justifyContent="space-between" sx={{ maxWidth: 170 }}>
            <img alt="varya cat" src="/varya.jpg" />
            <Typography component="h4" variant="h4">
              {translate('varya')}
            </Typography>
          </Stack>
          <Stack justifyContent="space-between" sx={{ maxWidth: 170 }}>
            <img alt="fania cat" src="/fanya.jpg" />
            <Typography component="h4" variant="h4">
              {translate('fanya')}
            </Typography>
          </Stack>
          <Stack justifyContent="space-between" sx={{ maxWidth: 170 }}>
            <img alt="murych cat" src="/murych.png" />
            <Typography component="h4" variant="h4">
              {translate('murych')}
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
