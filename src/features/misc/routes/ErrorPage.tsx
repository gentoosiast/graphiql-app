import { useRouteError } from 'react-router-dom';

import { Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import { Box, Stack } from '@mui/system';

export default function ErrorPage(): JSX.Element | undefined {
  const error = useRouteError();
  console.error(error);
  if (error instanceof Error) {
    return (
      <Box
        alignItems={'center'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        width={'100%'}
      >
        <Typography align="center" component={'h1'} margin={'2%'} variant="h2">
          Oops!
        </Typography>

        <Stack alignItems={'center'} justifyContent={'center'} width={'100%'}>
          <Stack
            alignItems={'center'}
            justifyContent={'center'}
            width={{ lg: '30%', md: '40%', sm: '80%', xs: '80%' }}
          >
            <img alt="cats-watch-laptop" src="/error-cats.jpg" style={{ width: '100%' }} />
          </Stack>
        </Stack>
        <Typography
          align="center"
          component={'h3'}
          fontSize={{ lg: 20, md: 18, sm: 18, xs: 16 }}
          margin={'3% 2%'}
          variant="h4"
          width={'60%'}
        >
          Something went wrong.. Try to reload the page.
        </Typography>

        <Alert severity="error" sx={{ padding: 5, width: '90%' }}>
          {error.message}
        </Alert>
      </Box>
    );
  }
}
