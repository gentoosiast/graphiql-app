import type { JSX } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';

import { MemberCard } from '@/components/MemberCard';
import { useI18NContext } from '@/contexts/i18n';
import { useAuth } from '@/features/auth';
import { developers } from '@/features/developers/data/developers';

export const WelcomePage = (): JSX.Element => {
  const { email } = useAuth();
  const { translate } = useI18NContext();

  const NavButton = (to: string, actionToTranslate: string, formMode?: string): JSX.Element => {
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

  return (
    <Box
      alignItems={'center'}
      display={'flex'}
      flexDirection={'column'}
      flexWrap={'wrap'}
      justifyContent={'center'}
      width={'100%'}
    >
      <nav
        style={{
          width: '100%',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'background.paper',

            padding: 2,
            textAlign: 'right',
            width: '100%',
          }}
        >
          {!email && (
            <>
              {NavButton('/auth', 'signIn', 'login')}
              {NavButton('/auth', 'signUp', 'register')}
            </>
          )}
          {email && NavButton('/main', 'mainPage')}
        </Box>
      </nav>

      <Stack alignItems="center" justifyContent="center">
        <Typography
          align="center"
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
            textAlign: { md: 'left', xs: 'center' },
            width: { lg: '60%', md: '85%', sm: '90%', xs: '100%' },
          }}
        >
          {translate('teamDescription')}
        </Typography>
      </Stack>
      <Box
        display={'flex'}
        flexWrap={'wrap'}
        justifyContent={{ lg: 'space-evenly', md: 'space-evenly', sm: 'center' }}
        padding={'3%'}
        sx={{
          ':last-child': {
            width: '100%',
          },
        }}
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
          gap={3}
          justifyContent={{ lg: 'space-evenly', md: 'space-evenly', sm: 'center' }}
          margin={'0 0 4%'}
          padding={'3% 0'}
          width={'100%'}
        >
          <Stack justifyContent="space-between" sx={{ maxWidth: 170 }}>
            <img alt="varya cat" src="/varya.jpg" />
            <Typography align="center" component="h4" variant="h5">
              {translate('varya')}
            </Typography>
          </Stack>
          <Stack justifyContent="space-between" sx={{ maxWidth: 170 }}>
            <img alt="fania cat" src="/fanya.jpg" />
            <Typography align="center" component="h4" variant="h5">
              {translate('fanya')}
            </Typography>
          </Stack>
          <Stack justifyContent="space-between" sx={{ maxWidth: 170 }}>
            <img alt="murych cat" src="/murych.png" />
            <Typography align="center" component="h4" variant="h5">
              {translate('murych')}
            </Typography>
          </Stack>
        </Box>
        <Stack alignItems="center" justifyContent="center">
          <Typography
            color="primary"
            component="h2"
            sx={{ fontSize: { lg: 40, md: 36, sm: 40, xs: 30 } }}
            textAlign="center"
            variant="h2"
          >
            About the course
          </Typography>
          <Typography
            sx={{
              fontSize: 20,
              margin: '2%',
              textAlign: { md: 'left', xs: 'center' },
              width: { lg: '60%', md: '85%', sm: '90%', xs: '100%' },
            }}
          >
            {translate('courseDescription')}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};
