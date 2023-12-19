import type { JSX } from 'react';
import { Link } from 'react-router-dom';

import { Avatar, Card, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';

import { useI18NContext } from '@/contexts/i18n';
import { MemberCardContent } from '@/features/data/member-card';

export const WelcomePage = (): JSX.Element => {
  const MemberCard = ({ children }: { children: JSX.Element }): JSX.Element => {
    return (
      <Card
        sx={{
          backgroundColor: 'background.paper',
          borderRadius: 3,
          boxShadow: 20,
          minWidth: 300,
          padding: 5,
        }}
      >
        {children}
      </Card>
    );
  };

  const { translate } = useI18NContext();

  return (
    <Box padding={2}>
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
        <Typography component="h1" sx={{ margin: 3 }} variant="h2">
          {translate('meetTheTeam')}
        </Typography>

        <Typography color="primary" component="h2" textAlign="center" variant="h2">
          San Junipero
        </Typography>
        <Typography sx={{ fontSize: 20, margin: 5, width: 600 }}>
          {translate('team-description')}
        </Typography>
      </Stack>

      <Stack direction="row" justifyContent="space-around">
        <MemberCardContent />
        <MemberCard>
          <>
            <Stack alignItems="center" justifyContent="center">
              <Avatar
                alt="Kate"
                src="/kate.jpg"
                sx={{ marginTop: 1, minHeight: 200, minWidth: 200 }}
              />
            </Stack>

            <Stack direction="row" justifyContent={'space-evenly'}>
              <Stack
                justifyContent="space-between
          "
                sx={{ maxWidth: 170 }}
              >
                <img alt="varya cat" src="/varya.jpg" />
              </Stack>

              <Stack
                justifyContent="space-between
          "
                sx={{ maxWidth: 170 }}
              >
                <img alt="fania cat" src="/fanya.jpg" />
              </Stack>
            </Stack>
          </>
        </MemberCard>

        <MemberCard>
          <>
            <Stack alignItems="center" justifyContent="center">
              <Avatar alt="Ira" src="/2.jpg" sx={{ height: 200, marginTop: 1, width: 200 }} />
            </Stack>
          </>
        </MemberCard>
      </Stack>

      <Stack direction="row" justifyContent="center">
        <MemberCard>
          <>
            <Stack alignItems="center" justifyContent="center">
              <Avatar alt="Sergey" src="/1.jpg" sx={{ height: 200, marginTop: 1, width: 200 }} />
            </Stack>
          </>
        </MemberCard>
      </Stack>
    </Box>
  );
};
