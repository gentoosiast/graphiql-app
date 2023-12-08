import type { JSX } from 'react';

import { Button, ButtonGroup, ImageListItem, Link, Stack } from '@mui/material';

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <Stack alignItems="center" direction="row" justifyContent="space-around" sx={{ height: 60 }}>
        <Link href="https://rs.school/react/">
          <ImageListItem
            alt="rss"
            component="img"
            src="src/assets/img/rs_school_js.svg"
            sx={{ backgroundColor: '#fff', borderRadius: 2, width: 125 }}
          />
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
          <Link color="#fff" href="https://github.com/gentoosiast" sx={{ textDecoration: 'none' }}>
            <Button sx={{ maxWidth: 200 }}>Sergey</Button>
          </Link>
          <Link
            color="#fff"
            href="https://github.com/Irina-Grebennikova"
            sx={{ textDecoration: 'none' }}
          >
            <Button sx={{ maxWidth: 200 }}>Irina</Button>
          </Link>
          <Link
            color="#fff"
            href="https://github.com/KateGoncharik"
            sx={{ textDecoration: 'none' }}
          >
            <Button sx={{ maxWidth: 200 }}>Kate</Button>
          </Link>
        </ButtonGroup>
      </Stack>
    </footer>
  );
};
