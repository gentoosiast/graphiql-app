import type { JSX } from 'react';
import { Link } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/system';

import { I18NLanguage } from '@/config/i18n';
import { useI18NContext } from '@/providers/i18n';

export const WelcomePage = (): JSX.Element => {
  const Member = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: 150,
  }));

  const MemberText = styled('div')(() => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: 250,
  }));

  const { setLanguage, translate } = useI18NContext();

  return (
    <>
      <Typography component="h1" textAlign="center" variant="h2">
        Welcome
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

      <Stack border={2} direction="row" justifyContent="space-around">
        <Member>
          <Avatar alt="Kate" src="src/assets/img/3.jpg" sx={{ height: 200, width: 200 }} />
          <MemberText>
            <p>{translate('kate-welcome-name')}</p>
            <ListItem>{translate('kate-welcome-from')}</ListItem>
            <p>{translate('kate-welcome-book')}</p>
            <p>{translate('kate-welcome-experience')}</p>
            <p>{translate('kate-welcome-pets')}</p>
            <p>{translate('kate-welcome-talent')}</p>
          </MemberText>
        </Member>
        <Member className="ira-block">
          <Avatar alt="Ira" src="src/assets/img/2.jpg" sx={{ height: 200, width: 200 }} />
          <MemberText>
            <p>{translate('ira-welcome-name')}</p>
            <p>{translate('ira-welcome-from')}</p>
            <p>{translate('ira-welcome-book')}</p>
            <p>{translate('ira-welcome-experience')}</p>
            <p>{translate('ira-welcome-pets')}</p>
            <p>{translate('ira-welcome-talent')}</p>
          </MemberText>
        </Member>
      </Stack>

      <Stack border={2} direction="row" justifyContent="center">
        <Member>
          <Avatar alt="Sergey" src="src/assets/img/1.jpg" sx={{ height: 200, width: 200 }} />

          <MemberText>
            <p>{translate('sergey-welcome-name')}</p>
            <p>{translate('sergey-welcome-from')}</p>
            <p>{translate('sergey-welcome-book')}</p>
            <p>{translate('sergey-welcome-experience')}</p>
            <p>{translate('sergey-welcome-pets')}</p>
            <p>{translate('sergey-welcome-talent')}</p>
          </MemberText>
        </Member>
      </Stack>
    </>
  );
};
