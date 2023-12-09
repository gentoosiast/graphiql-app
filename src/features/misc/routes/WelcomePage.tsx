import type { JSX } from 'react';
import { Link } from 'react-router-dom';

import { Card, CardHeader } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/system';

import { I18NLanguage } from '@/config/i18n';
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

  const { setLanguage, translate } = useI18NContext();

  return (
    <>
      <Typography component="h1" textAlign="center" variant="h2">
        {translate('welcome')}
      </Typography>
      <Typography component="h2" textAlign="center" variant="h2">
        {translate('team')}
        <Typography color="primary" component="h2" fontSize="150" variant="h2">
          San Junipero
        </Typography>
      </Typography>
      <button onClick={() => setLanguage(I18NLanguage.English)} type="button">
        Switch language to EN
      </button>
      <button onClick={() => setLanguage(I18NLanguage.Russian)} type="button">
        Switch language to RU
      </button>

      <nav>
        <Link to="/auth">Sign In / Sign Up Page</Link>
        <Link to="/main">Main Page</Link>
      </nav>

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
              src="src/assets/img/3.jpg"
              sx={{ marginTop: 1, minHeight: 200, minWidth: 200 }}
            />
          </Stack>
          <CardHeader color="primary" title={`${translate('kate-welcome-name')}`} />
          <MemberText>
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
            <Avatar
              alt="Ira"
              src="src/assets/img/2.jpg"
              sx={{ height: 200, marginTop: 1, width: 200 }}
            />
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
            <Avatar
              alt="Sergey"
              src="src/assets/img/1.jpg"
              sx={{ height: 200, marginTop: 1, width: 200 }}
            />
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
      <Stack alignItems="center" justifyContent="center">
        <Typography color="primary" component="h3" sx={{ margin: 10 }} variant="h3">
          Text about team
        </Typography>
        <Typography sx={{ fontSize: 20, width: 600 }}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
          cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero,
          written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
          Renaissance. The first line of Lorem Ipsum,
        </Typography>
      </Stack>
    </>
  );
};
