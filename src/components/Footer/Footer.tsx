import type { JSX } from 'react';

import { Button, ButtonGroup, Link, Stack } from '@mui/material';

import { useI18NContext } from '@/contexts/i18n';

import { GitHubIcon } from '../GitHubIcon';
import { RssIcon } from '../RSSIcon';

export const Footer = (): JSX.Element => {
  const { translate } = useI18NContext();
  return (
    <footer>
      <Stack
        alignItems="center"
        bgcolor="background.paper"
        direction="row"
        display="flex"
        justifyContent="center"
        padding={{ lg: '1%', md: '1%', sm: '3%', xs: '5% 1%' }}
      >
        <Stack
          alignItems="center"
          direction="row"
          display="flex"
          justifyContent={{
            lg: 'space-evenly',
            md: 'space-evenly',
            sm: 'space-evenly',
            xs: 'space-evenly',
          }}
          width={{ lg: '60%', md: '85%', sm: '95%', xs: '100%' }}
        >
          <Link
            href="https://rs.school/react/"
            width={{ lg: '13%', md: '15%', sm: '17%', xs: '18%' }}
          >
            <RssIcon />
          </Link>

          <ButtonGroup
            color="primary"
            orientation="horizontal"
            size="small"
            sx={{
              alignItems: 'center',
              boxShadow: 'none',
              display: 'flex',

              fontSize: { lg: 18, md: 14, sm: 14, xs: 14 },
              width: { lg: '40%', md: '50%', sm: '50%', xs: '60%' },
            }}
            variant="contained"
          >
            <Link href="https://github.com/gentoosiast" sx={{ margin: 0, textDecoration: 'none' }}>
              <Button
                sx={{
                  display: 'flex',
                  flexDirection: { lg: 'row', md: 'column', sm: 'column', xs: 'column' },
                }}
              >
                <GitHubIcon />
                {translate('footerSergeyName')}
              </Button>
            </Link>
            <Link href="https://github.com/Irina-Grebennikova" sx={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  display: 'flex',
                  flexDirection: { lg: 'row', md: 'column', sm: 'column', xs: 'column' },
                }}
              >
                <GitHubIcon />
                {translate('footerIraName')}
              </Button>
            </Link>
            <Link href="https://github.com/KateGoncharik" sx={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  display: 'flex',
                  flexDirection: { lg: 'row', md: 'column', sm: 'column', xs: 'column' },
                }}
              >
                <GitHubIcon />
                {translate('footerKateName')}
              </Button>
            </Link>
          </ButtonGroup>
        </Stack>
      </Stack>
    </footer>
  );
};
