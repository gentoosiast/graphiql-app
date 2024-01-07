import type { JSX } from 'react';

import { ButtonGroup, Link, Typography } from '@mui/material';

import { GitHubButton } from '../GitHubButton';
import { RssIcon } from '../RSSIcon';
import { FooterContentWrapper, FooterWrapper, IconDateWrapper } from './FooterWrappers';

export const Footer = (): JSX.Element => {
  return (
    <footer>
      {FooterWrapper(
        FooterContentWrapper(
          <>
            {IconDateWrapper(
              <>
                <Link href="https://rs.school/react/" width={{ lg: '33%', xs: '100%' }}>
                  <RssIcon />
                </Link>
                <Typography
                  component={'p'}
                  sx={{ fontSize: { lg: 16, sm: 14 } }}
                  textAlign={'center'}
                >
                  2023-2024
                </Typography>
              </>,
            )}

            <ButtonGroup
              color="primary"
              orientation="horizontal"
              size="small"
              sx={{
                boxShadow: 'none',
                display: 'flex',
              }}
              variant="contained"
            >
              {GitHubButton('https://github.com/gentoosiast', '10% 0 0 10%', 'footerSergeyName')}
              {GitHubButton('https://github.com/Irina-Grebennikova', '0', 'footerIraName')}
              {GitHubButton('https://github.com/KateGoncharik', '0 10% 10% 0', 'footerKateName')}
            </ButtonGroup>
          </>,
        ),
      )}
    </footer>
  );
};
