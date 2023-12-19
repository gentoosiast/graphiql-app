import { CardHeader, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';

import { useI18NContext } from '@/contexts/i18n';
import { developers } from '@/features/data/developers';

export const MemberCardContent = (): JSX.Element => {
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
  return developers?.length ? (
    <>
      {developers.map((developer) => {
        return (
          <>
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
          </>
        );
      })}
    </>
  ) : (
    <>No developers</>
  );
};
