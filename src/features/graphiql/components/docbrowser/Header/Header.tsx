import type { JSX, ReactNode } from 'react';

import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import { Divider, IconButton } from '@mui/material';
import { Stack } from '@mui/system';

type Props = {
  children: ReactNode;
  onDocsClose: () => void;
  t: (key: string) => string;
};

const Header = ({ children, onDocsClose, t }: Props): JSX.Element => {
  return (
    <>
      <Stack alignItems="center" direction="row" justifyContent="space-between">
        {children}
        <IconButton aria-label={t('docs.close')} color="primary" onClick={onDocsClose}>
          <ArrowBackIosSharpIcon />
        </IconButton>
      </Stack>
      <Divider />
    </>
  );
};

export { Header };
