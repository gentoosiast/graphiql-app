import type { JSX } from 'react';

import { Button, ButtonGroup, Link, Stack } from '@mui/material';

import { GitHubIconSvg } from '../github-icon';
import { RssIconSvg } from '../rss-icon';

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <Stack
        alignItems="center"
        bgcolor="background.paper"
        direction="row"
        justifyContent="center"
        sx={{ minHeight: 60 }}
      >
        <Stack alignItems="center" direction="row">
          <Link href="https://rs.school/react/">
            <Stack alignItems="center" minWidth="200">
              <RssIconSvg />
            </Stack>
          </Link>
          <ButtonGroup
            color="primary"
            orientation="horizontal"
            size="large"
            sx={{
              boxShadow: 'none',
              display: 'flex',
              justifyContent: 'space-evenly',
              maxWidth: 600,
            }}
            variant="contained"
          >
            <Link href="https://github.com/gentoosiast" sx={{ textDecoration: 'none' }}>
              <Button sx={{ maxWidth: 200 }}>
                <GitHubIconSvg />
                Sergey
              </Button>
            </Link>
            <Link href="https://github.com/Irina-Grebennikova" sx={{ textDecoration: 'none' }}>
              <Button sx={{ maxWidth: 200 }}>
                <GitHubIconSvg />
                Irina
              </Button>
            </Link>
            <Link href="https://github.com/KateGoncharik" sx={{ textDecoration: 'none' }}>
              <Button sx={{ maxWidth: 200 }}>
                <GitHubIconSvg />
                Kate
              </Button>
            </Link>
          </ButtonGroup>
        </Stack>
      </Stack>
    </footer>
  );
};
