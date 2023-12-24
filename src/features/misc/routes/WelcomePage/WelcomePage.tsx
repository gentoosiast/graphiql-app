import type { JSX } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';

import { MemberCard } from '@/components/MemberCard';
import { useI18NContext } from '@/contexts/i18n';
import { AuthState, useAuth } from '@/features/auth';
import { developers } from '@/features/data/developers';

export const WelcomePage = (): JSX.Element => {
  const { authState } = useAuth();
  const { translate } = useI18NContext();

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
          {authState === AuthState.NOT_AUTHENTICATED && (
            <>
              <Button
                component={RouterLink}
                state={{ formMode: 'login' }}
                sx={{
                  ':hover': {
                    backgroundColor: 'background.paper',
                  },
                  backgroundColor: 'primary.main',
                  border: 1,
                  color: 'primary.contrastText',
                  fontSize: { lg: 18, md: 17, sm: 16, xs: 14 },
                  margin: 0.7,
                  textDecoration: 'none',
                }}
                to="/auth"
              >
                {translate('signIn')}
              </Button>
              <Button
                component={RouterLink}
                state={{ formMode: 'register' }}
                sx={{
                  ':hover': {
                    backgroundColor: 'background.paper',
                  },
                  backgroundColor: 'primary.main',
                  border: 1,
                  color: 'primary.contrastText',
                  fontSize: { lg: 18, md: 17, sm: 16, xs: 14 },
                  margin: 0.7,
                  textDecoration: 'none',
                }}
                to="/auth"
              >
                {translate('signUp')}
              </Button>
            </>
          )}
          {authState === AuthState.AUTHENTICATED && (
            <Button
              component={RouterLink}
              sx={{
                ':hover': {
                  backgroundColor: 'background.paper',
                },
                backgroundColor: 'primary.main',
                border: 1,
                color: 'primary.contrastText',
                fontSize: { lg: 17, md: 16, sm: 15, xs: 14 },
                margin: 0.7,
                textDecoration: 'none',
              }}
              to="/main"
              variant="outlined"
            >
              Main Page
            </Button>
          )}
        </Box>
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
            textAlign: { md: 'left', xs: 'center' },
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
          gap={3}
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
