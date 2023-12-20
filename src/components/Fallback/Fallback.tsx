import { FallbackProps } from 'react-error-boundary';

import { Alert, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';

import { useI18NContext } from '@/contexts/i18n';

export const Fallback = ({ error }: FallbackProps): JSX.Element => {
  const { translate } = useI18NContext();

  const errorMessage =
    error instanceof Error ? `${error.name}: ${error.message}` : JSON.stringify(error);
  return (
    <Box
      alignItems={'center'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      padding={'0 0 5%'}
      width={'100%'}
    >
      <Typography align="center" component={'h1'} margin={'2%'} variant="h2">
        {translate('oops')}
      </Typography>

      <Stack alignItems={'center'} justifyContent={'center'} width={'100%'}>
        <Stack
          alignItems={'center'}
          justifyContent={'center'}
          width={{ lg: '40%', md: '55%', sm: '70%', xl: '25%', xs: '80%' }}
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
        {translate('unknownError')}
      </Typography>
      <Alert
        severity="error"
        sx={{
          fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px' },
          padding: 5,
          width: '90%',
        }}
      >
        {errorMessage}
      </Alert>
    </Box>
  );
};
