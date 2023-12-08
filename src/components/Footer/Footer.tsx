import type { JSX } from 'react';

import { Button, ButtonGroup, ImageListItem, Link, Stack } from '@mui/material';

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <Stack direction="row" justifyContent="space-around" sx={{ height: 60 }}>
        <Link href="https://rs.school/react/">
          <ImageListItem
            alt="rss"
            component="img"
            src="src/assets/img/rs_school_js.svg"
            sx={{ backgroundColor: '#fff', borderRadius: 2, width: 150 }}
          />
        </Link>
        <ButtonGroup
          color="primary"
          orientation="horizontal"
          size="large"
          sx={{ width: 500 }}
          variant="contained"
        >
          <Button fullWidth>
            <Link
              color="#fff"
              href="https://github.com/gentoosiast"
              sx={{ textDecoration: 'none' }}
            >
              Sergey
            </Link>
          </Button>
          <Button fullWidth>
            <Link
              color="#fff"
              href="https://github.com/Irina-Grebennikova"
              sx={{ textDecoration: 'none' }}
            >
              Irina
            </Link>
          </Button>
          <Button fullWidth>
            <Link
              color="#fff"
              href="https://github.com/KateGoncharik"
              sx={{ textDecoration: 'none' }}
            >
              Kate
            </Link>
          </Button>
        </ButtonGroup>
      </Stack>
    </footer>
  );
};
