import type { JSX } from 'react';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Avatar, Box, Button, Card, CardHeader, ListItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/system';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '@/config/firebase';
import { useI18NContext } from '@/providers/i18n';

export const WelcomePage = (): JSX.Element => {
  const MemberText = styled('div')(() => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 18,
    justifyContent: 'center',
    width: 400,
  }));

  const { translate } = useI18NContext();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  useEffect(() => onAuthStateChanged(auth, (user) => setIsUserLoggedIn(!!user)), []);

  return (
    <>
      <nav>
        <Box
          flexDirection={'row'}
          sx={{ backgroundColor: 'background.paper', fontSize: 20, textAlign: 'center' }}
        >
          <Button
            component={RouterLink}
            sx={{ textDecoration: 'none' }}
            to="/auth"
            variant="outlined"
          >
            Sign In / Sign Up Page
          </Button>
          {isUserLoggedIn && (
            <Button
              component={RouterLink}
              sx={{ textDecoration: 'none' }}
              to="/main"
              variant="outlined"
            >
              Main Page
            </Button>
          )}
        </Box>
      </nav>

      <Stack alignItems="center" justifyContent="center">
        <Typography component="h1" sx={{ margin: 3 }} variant="h2">
          {translate('welcome')}
        </Typography>

        <Typography color="primary" component="h2" textAlign="center" variant="h2">
          San Junipero
        </Typography>
        <Typography sx={{ fontSize: 20, margin: 5, width: 600 }}>
          {translate('team-description')}
        </Typography>
      </Stack>

      <Stack direction="row" justifyContent="space-around">
        <Card
          sx={{
            backgroundColor: 'background.paper',
            borderRadius: 3,
            boxShadow: 20,
            minWidth: 300,
            padding: 5,
          }}
        >
          <Stack alignItems="center" justifyContent="center">
            <Avatar
              alt="Kate"
              src="/kate.jpg"
              sx={{ marginTop: 1, minHeight: 200, minWidth: 200 }}
            />
          </Stack>
          <MemberText>
            <CardHeader color="primary" title={`${translate('kate-welcome-name')}`} />

            <ListItem>{translate('kate-welcome-from')}</ListItem>
            <ListItem>{translate('kate-welcome-book')}</ListItem>
            <ListItem>{translate('kate-welcome-experience')}</ListItem>
            <ListItem>{translate('kate-welcome-talent')}</ListItem>
            <ListItem>{translate('kate-welcome-pets')}</ListItem>
          </MemberText>
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
        </Card>

        <Card
          sx={{
            backgroundColor: 'background.paper',
            borderRadius: 3,
            boxShadow: 20,
            minWidth: 300,
            padding: 5,
          }}
        >
          <Stack alignItems="center" justifyContent="center">
            <Avatar alt="Ira" src="/2.jpg" sx={{ height: 200, marginTop: 1, width: 200 }} />
          </Stack>
          <MemberText>
            <CardHeader title={`${translate('ira-welcome-name')}`} />
            <ListItem>{translate('ira-welcome-from')}</ListItem>
            <ListItem>{translate('ira-welcome-experience')}</ListItem>
            <ListItem>{translate('ira-welcome-talent')}</ListItem>
            <ListItem>{translate('ira-welcome-pets')}</ListItem>
            <Stack sx={{ maxWidth: 250 }}>
              <img alt="murych cat" src="/murych.png" />
            </Stack>
          </MemberText>
        </Card>
      </Stack>

      <Stack direction="row" justifyContent="center">
        <Card
          sx={{
            backgroundColor: 'background.paper',
            borderRadius: 3,
            boxShadow: 20,
            marginTop: 5,
            minWidth: 300,
            padding: 5,
          }}
        >
          <Stack alignItems="center" justifyContent="center">
            <Avatar alt="Sergey" src="/1.jpg" sx={{ height: 200, marginTop: 1, width: 200 }} />
          </Stack>
          <MemberText>
            <CardHeader title={`${translate('sergey-welcome-name')}`} />
            <ListItem>{translate('sergey-welcome-from')}</ListItem>
            <ListItem>{translate('sergey-welcome-book')}</ListItem>
            <ListItem>{translate('sergey-welcome-experience')}</ListItem>
            <ListItem>{translate('sergey-welcome-talent')}</ListItem>
            <ListItem>{translate('sergey-welcome-pets')}</ListItem>
          </MemberText>
        </Card>
      </Stack>
    </>
  );
};
