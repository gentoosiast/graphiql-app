import { useState } from 'react';
import type { JSX, SyntheticEvent } from 'react';

import { json, jsonParseLinter } from '@codemirror/lang-json';
import { lintGutter, linter } from '@codemirror/lint';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Tooltip from '@mui/material/Tooltip';
import { tokyoNightStormInit } from '@uiw/codemirror-theme-tokyo-night-storm';
import CodeMirror from '@uiw/react-codemirror';

import { useI18NContext } from '@/contexts/i18n';

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
  const { translate } = useI18NContext();
  const [currentTabIdx, setCurrentTabIdx] = useState(0);
  const [isTabbarOpen, setIsTabbarOpen] = useState(false);
  const [variablesCode, setVariablesCode] = useState('{\n  \n}');
  const [headersCode, setHeadersCode] = useState('{\n  \n}');
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
    <Box sx={{ bottom: 0, left: 0, position: 'absolute', width: '100%' }}>
      <Collapse in={isTabbarOpen} sx={{ borderBlockStart: '1px solid #555' }}>
        <CustomTabPanel index={0} value={currentTabIdx}>
          <CodeMirror
            extensions={[json(), linter(jsonParseLinter()), lintGutter()]}
            height="150px"
            onChange={handleVariablesChange}
            placeholder={translate('graphqlVariablesPlaceholder')}
            style={{ fontSize: 12 }}
            theme={theme}
            value={variablesCode}
          />
        </CustomTabPanel>
        <CustomTabPanel index={1} value={currentTabIdx}>
          <CodeMirror
            extensions={[json(), linter(jsonParseLinter()), lintGutter()]}
            height="150px"
            onChange={handleHeadersChange}
            placeholder={translate('graphqlHeadersPlaceholder')}
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
          aria-label={translate('graphqlRequestTabsLabel')}
          indicatorColor="secondary"
          onChange={handleTabChange}
          textColor="secondary"
          value={currentTabIdx}
        >
          <Tab
            label={translate('graphqlVariablesTabLabel')}
            {...a11yProps(0)}
            onClick={() => setIsTabbarOpen(true)}
          />
          <Tab
            label={translate('graphqlHeadersTabLabel')}
            {...a11yProps(1)}
            onClick={() => setIsTabbarOpen(true)}
          />
        </Tabs>
        <Tooltip
          title={isTabbarOpen ? translate('collapseTabsLabel') : translate('expandTabsLabel')}
        >
          <IconButton
            aria-label={
              isTabbarOpen ? translate('collapseTabsLabel') : translate('expandTabsLabel')
            }
            onClick={() => setIsTabbarOpen(!isTabbarOpen)}
          >
            {isTabbarOpen ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};
