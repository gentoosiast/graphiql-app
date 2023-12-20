import type { JSX, ReactNode } from 'react';

import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import { Divider, IconButton } from '@mui/material';
import { Stack } from '@mui/system';

type Props = {
  children: ReactNode;
  onDocsClose: () => void;
};

const Header = ({ children, onDocsClose }: Props): JSX.Element => {
  return (
    <>
      <Stack alignItems="center" direction="row" justifyContent="space-between">
        {children}
        <IconButton color="primary" onClick={onDocsClose}>
          <ArrowBackIosSharpIcon />
        </IconButton>
      </Stack>
      <Divider />
    </>
  );
};

export { Header };
