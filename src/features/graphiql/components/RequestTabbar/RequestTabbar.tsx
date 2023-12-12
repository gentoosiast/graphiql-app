import { useState } from 'react';
import type { JSX, SyntheticEvent } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

export const RequestTabbar = (): JSX.Element => {
  const [value, setValue] = useState('variables');

  const handleChange = (_: SyntheticEvent, newValue: string): void => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        aria-label="secondary tabs example"
        indicatorColor="secondary"
        onChange={handleChange}
        textColor="secondary"
        value={value}
      >
        <Tab label="Variables" value="variables" />
        <Tab label="Headers" value="headers" />
      </Tabs>
    </Box>
  );
};
