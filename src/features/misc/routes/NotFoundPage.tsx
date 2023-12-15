import type { JSX } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Button, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';

export const NotFoundPage = (): JSX.Element => {
  return (
    <Box padding={'2%'}>
      <Typography align="center" component={'h1'} variant="h1">
        Oh.. Hello?
      </Typography>

      <Stack flexDirection={'row'} justifyContent={'space-evenly'} width={'100%'}>
        <img alt="cat on the table" src="/not-found-2.jpg" width={'30%'} />
        <img alt="cat on the table taking a shower" src="/not-found.jpg" width={'30%'} />
      </Stack>
      <Typography align="center" component={'h4'} mt={3} variant="h5">
        We are a litte bit busy here..
      </Typography>
      <Stack alignItems={'center'} justifyContent={'center'}>
        <Typography
          align="center"
          component={'h4'}
          fontSize="22"
          maxWidth={'80%'}
          mt={3}
          variant="h5"
        >
          So, maybe, you will go back to the welcome page?
        </Typography>
        <Button
          component={RouterLink}
          sx={{
            ':hover': {
              backgroundColor: 'primary.light',
            },
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            fontSize: 22,
            maxWidth: '40%',
            mt: 2,
          }}
          to="/"
        >
          Welcome page
        </Button>
      </Stack>
    </Box>
  );
};
