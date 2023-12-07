import type { JSX } from 'react';
import { Link } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/system';

import { I18NLanguage } from '@/config/i18n';
import { useI18NContext } from '@/providers/i18n';

export const WelcomePage = (): JSX.Element => {
  const Member = styled('div')(() => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: 400,
  }));

  const MemberText = styled('div')(() => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 20,
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
      <p>{translate('greeting')}</p>
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

      <Stack direction="row" justifyContent="space-around" padding="2">
        <Member>
          <Avatar
            alt="Kate"
            src="src/assets/img/3.jpg"
            sx={{ height: 200, margin: 2, marginTop: 5, width: 200 }}
          />
          <Badge color="primary" sx={{ fontSize: 28 }}>
            <p>{translate('kate-welcome-name')}</p>
          </Badge>
          <MemberText>
            <ListItem>{translate('kate-welcome-from')}</ListItem>
            <ListItem>{translate('kate-welcome-book')}</ListItem>
            <ListItem>{translate('kate-welcome-experience')}</ListItem>
            <ListItem>{translate('kate-welcome-pets')}</ListItem>
            <ListItem>{translate('kate-welcome-talent')}</ListItem>
          </MemberText>
        </Member>
        <Member>
          <Avatar
            alt="Ira"
            src="src/assets/img/2.jpg"
            sx={{ height: 200, marginTop: 5, width: 200 }}
          />
          <MemberText>
            <Badge color="primary" sx={{ fontSize: 28 }}>
              <p>{translate('ira-welcome-name')}</p>
            </Badge>
            <ListItem>{translate('ira-welcome-from')}</ListItem>
            <ListItem>{translate('ira-welcome-book')}</ListItem>
            <ListItem>{translate('ira-welcome-experience')}</ListItem>
            <ListItem>{translate('ira-welcome-pets')}</ListItem>
            <ListItem>{translate('ira-welcome-talent')}</ListItem>
          </MemberText>
        </Member>
      </Stack>

      <Stack direction="row" justifyContent="center">
        <Member>
          <Avatar
            alt="Sergey"
            src="src/assets/img/1.jpg"
            sx={{ height: 200, marginTop: 5, width: 200 }}
          />
          <MemberText>
            <Badge color="primary" sx={{ fontSize: 28 }}>
              <p>{translate('sergey-welcome-name')}</p>
            </Badge>
            <ListItem>{translate('sergey-welcome-from')}</ListItem>
            <ListItem>{translate('sergey-welcome-book')}</ListItem>
            <ListItem>{translate('sergey-welcome-experience')}</ListItem>
            <ListItem>{translate('sergey-welcome-pets')}</ListItem>
            <ListItem>{translate('sergey-welcome-talent')}</ListItem>
          </MemberText>
        </Member>
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
