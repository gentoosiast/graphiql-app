import { Button, Link } from '@mui/material';

import { useI18NContext } from '@/contexts/i18n';

import { GitHubIcon } from '../GitHubIcon';

export const GitHubButton = (
  githubLink: string,
  borderRadius: string,
  nameForTranslation: string,
): JSX.Element => {
  const { translate } = useI18NContext();
  return (
    <Link
      href={githubLink}
      sx={{
        border: 0.5,
        borderColor: 'primary.contrastText',
        borderRadius,
        textDecoration: 'none',
      }}
    >
      <Button
        sx={{
          display: 'flex',
          flexDirection: { lg: 'row', xs: 'column' },
          fontSize: { lg: 16, md: 14, sm: 12, xs: 10 },
          transition: '2s',
        }}
      >
        <GitHubIcon />
        {translate(nameForTranslation)}
      </Button>
    </Link>
  );
};
