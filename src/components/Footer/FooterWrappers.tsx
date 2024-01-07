import { Stack } from '@mui/system';

export const FooterWrapper = (children: JSX.Element): JSX.Element => {
  return (
    <Stack
      alignItems="center"
      bgcolor="background.paper"
      direction="row"
      display="flex"
      justifyContent="center"
      padding={{ lg: '1%', md: '2%', sm: '3%', xs: '5% 1%' }}
    >
      {children}
    </Stack>
  );
};
export const FooterContentWrapper = (children: JSX.Element): JSX.Element => {
  return (
    <Stack
      alignItems="center"
      direction="row"
      display="flex"
      justifyContent={'space-evenly'}
      width={{ lg: '60%', md: '85%', sm: '95%', xs: '100%' }}
    >
      {children}
    </Stack>
  );
};
export const IconDateWrapper = (children: JSX.Element): JSX.Element => {
  return (
    <Stack
      alignItems="center"
      direction="row"
      display="flex"
      flexDirection={{ lg: 'row', md: 'column', sm: 'column', xs: 'column' }}
      justifyContent={'space-between'}
    >
      {children}
    </Stack>
  );
};
