import { useState } from 'react';
import type { JSX, SyntheticEvent } from 'react';

import { json } from '@codemirror/lang-json';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { tokyoNightStormInit } from '@uiw/codemirror-theme-tokyo-night-storm';
import CodeMirror from '@uiw/react-codemirror';

import { CustomTabPanel } from '../CustomTabPanel';

import 'hack-font/build/web/hack.css';

const a11yProps = (index: number): Record<string, string> => {
  return {
    'aria-controls': `simple-tabpanel-${index}`,
    id: `simple-tab-${index}`,
  };
};

type Props = {
  onHeadersChange: (code: string) => void;
  onVariablesChange: (code: string) => void;
};

export const RequestTabbar = ({ onHeadersChange, onVariablesChange }: Props): JSX.Element => {
  const [currentTabIdx, setCurrentTabIdx] = useState(0);
  const [isTabbarOpen, setIsTabbarOpen] = useState(false);
  const [variablesCode, setVariablesCode] = useState('');
  const [headersCode, setHeadersCode] = useState('');
  const theme = tokyoNightStormInit({
    settings: {
      fontFamily: 'Hack, monospace',
    },
  });

  const handleTabChange = (_: SyntheticEvent, newValue: number): void => {
    if (!isTabbarOpen) {
      setIsTabbarOpen(true);
    }
    setCurrentTabIdx(newValue);
  };

  const handleVariablesChange = (newValue: string): void => {
    setVariablesCode(newValue);
    onVariablesChange(newValue);
  };

  const handleHeadersChange = (newValue: string): void => {
    setHeadersCode(newValue);
    onHeadersChange(newValue);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Box sx={{ bottom: '15px', left: 0, position: 'absolute', width: '100%' }}>
        <Collapse in={isTabbarOpen}>
          <CustomTabPanel index={0} value={currentTabIdx}>
            <CodeMirror
              extensions={[json()]}
              height="150px"
              onChange={handleVariablesChange}
              placeholder="Variables (in JSON format)"
              style={{ fontSize: 12 }}
              theme={theme}
              value={variablesCode}
            />
          </CustomTabPanel>
          <CustomTabPanel index={1} value={currentTabIdx}>
            <CodeMirror
              extensions={[json()]}
              height="150px"
              onChange={handleHeadersChange}
              placeholder="Headers (in JSON format)"
              style={{ fontSize: 12 }}
              theme={theme}
              value={headersCode}
            />
          </CustomTabPanel>
        </Collapse>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Tabs
            aria-label="secondary tabs example"
            indicatorColor="secondary"
            onChange={handleTabChange}
            textColor="secondary"
            value={currentTabIdx}
          >
            <Tab label="Variables" {...a11yProps(0)} onClick={() => setIsTabbarOpen(true)} />
            <Tab label="Headers" {...a11yProps(1)} onClick={() => setIsTabbarOpen(true)} />
          </Tabs>
          <IconButton
            aria-label={isTabbarOpen ? 'collapse tab bar' : 'expand tab bar'}
            onClick={() => setIsTabbarOpen(!isTabbarOpen)}
          >
            {isTabbarOpen ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
