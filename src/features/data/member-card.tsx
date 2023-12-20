import { Avatar, Box, CardHeader, ListItem, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import { useI18NContext } from '@/contexts/i18n';

type Developer = string[];

type MemberCardProps = {
  developer: Developer;
};

export const MemberCardContent = ({ developer }: MemberCardProps): JSX.Element => {
  const MemberText = styled('div')(() => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 18,
    justifyContent: 'center',
    width: 400,
  }));
  const MemberDescriptionPoint = styled('p')(() => ({
    color: '#ea4c87',
    fontSize: 22,
    margin: 0.2,
    width: 400,
  }));
  const { translate } = useI18NContext();
  return developer ? (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: 3,
        boxShadow: 20,
        mt: '2%',
        padding: '2%',
        width: { lg: '45%', md: '70%', sm: '85%' },
      }}
    >
      <Stack alignItems="center" justifyContent="center">
        <Avatar
          alt="teammember"
          src={`${developer[8]}`}
          sx={{
            height: '20%',
            marginTop: 1,
            width: { lg: '35%', md: '40%', sm: '40%', xs: '35%' },
          }}
        />
      </Stack>
      <MemberText>
        <CardHeader color="primary" title={`${translate(developer[0])}`} />
        <MemberDescriptionPoint>{translate('role')}</MemberDescriptionPoint>
        <ListItem>{translate(developer[1])}</ListItem>
        <MemberDescriptionPoint>{translate('from')}</MemberDescriptionPoint>
        <ListItem>{translate(developer[2])}</ListItem>
        <MemberDescriptionPoint>{translate('book')}</MemberDescriptionPoint>
        <ListItem>{translate(developer[3])}</ListItem>
        <MemberDescriptionPoint>{translate('experience')}</MemberDescriptionPoint>
        <ListItem>{translate(developer[4])}</ListItem>
        <MemberDescriptionPoint>{translate('courses')}</MemberDescriptionPoint>
        <ListItem>{translate(developer[5])}</ListItem>
        <MemberDescriptionPoint>{translate('talent')}</MemberDescriptionPoint>
        <ListItem>{translate(developer[6])}</ListItem>
        <MemberDescriptionPoint>{translate('pets')}</MemberDescriptionPoint>
        <ListItem>{translate(developer[7])}</ListItem>
      </MemberText>
    </Box>
  ) : (
    <>No developers</>
  );
};
