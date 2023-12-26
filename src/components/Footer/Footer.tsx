import type { JSX } from 'react';

import { Button, ButtonGroup, Link, Stack, Typography } from '@mui/material';

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
        padding={{ lg: '1%', md: '2%', sm: '3%', xs: '5% 1%' }}
      >
        <Stack
          alignItems="center"
          direction="row"
          display="flex"
          justifyContent={'space-evenly'}
          width={{ lg: '60%', md: '85%', sm: '95%', xs: '100%' }}
        >
          <Stack
            alignItems="center"
            direction="row"
            display="flex"
            flexDirection={{ lg: 'row', md: 'column', sm: 'column', xs: 'column' }}
            justifyContent={'space-between'}
          >
            <Link href="https://rs.school/react/" width={{ lg: '33%', xs: '100%' }}>
              <RssIcon />
            </Link>
            <Typography component={'p'} sx={{ fontSize: { lg: 16, sm: 14 } }} textAlign={'center'}>
              2023-2024
            </Typography>
          </Stack>

          <ButtonGroup
            color="primary"
            orientation="horizontal"
            size="small"
            sx={{
              boxShadow: 'none',
              display: 'flex',
            }}
            variant="contained"
          >
            <Link href="https://github.com/gentoosiast" sx={{ margin: 0, textDecoration: 'none' }}>
              <Button
                sx={{
                  display: 'flex',
                  flexDirection: { lg: 'row', xs: 'column' },
                  fontSize: { lg: 16, md: 14, sm: 12, xs: 10 },
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
                  fontSize: { lg: 16, md: 14, sm: 12, xs: 10 },
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
                  flexDirection: { lg: 'row', xs: 'column' },
                  fontSize: { lg: 16, md: 14, sm: 12, xs: 10 },
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
