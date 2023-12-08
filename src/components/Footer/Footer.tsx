import type { JSX } from 'react';

import { Button, ButtonGroup, Link, Stack } from '@mui/material';

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <Stack
        alignItems="center"
        bgcolor="background.paper"
        direction="row"
        justifyContent="space-around"
        sx={{ minHeight: 60 }}
      >
        <Link href="https://rs.school/react/">
          <img alt="RS School logo" src="/rss-logo.svg" style={{ maxHeight: 40 }} />
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
            <Button sx={{ maxWidth: 200 }}>Sergey</Button>
          </Link>
          <Link href="https://github.com/Irina-Grebennikova" sx={{ textDecoration: 'none' }}>
            <Button sx={{ maxWidth: 200 }}>Irina</Button>
          </Link>
          <Link href="https://github.com/KateGoncharik" sx={{ textDecoration: 'none' }}>
            <Button sx={{ maxWidth: 200 }}>Kate</Button>
          </Link>
        </ButtonGroup>
      </Stack>
    </footer>
  );
};
