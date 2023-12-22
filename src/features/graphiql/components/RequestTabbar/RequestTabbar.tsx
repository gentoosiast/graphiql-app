import { useState } from 'react';
import type { JSX, SyntheticEvent } from 'react';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Tooltip from '@mui/material/Tooltip';

import { useI18NContext } from '@/contexts/i18n';

import { CustomTabPanel } from '../CustomTabPanel';
import { Editor } from '../Editor';

const a11yProps = (index: number): Record<string, string> => {
  return {
    'aria-controls': `simple-tabpanel-${index}`,
    id: `simple-tab-${index}`,
  };
};

type Props = {
  headers: string;
  onHeadersChange: (code: string) => void;
  onVariablesChange: (code: string) => void;
  variables: string;
};

export const RequestTabbar = ({
  headers,
  onHeadersChange,
  onVariablesChange,
  variables,
}: Props): JSX.Element => {
  const { translate } = useI18NContext();
  const [currentTabIdx, setCurrentTabIdx] = useState(0);
  const [isTabbarOpen, setIsTabbarOpen] = useState(false);

  const handleTabChange = (_: SyntheticEvent, newValue: number): void => {
    if (!isTabbarOpen) {
      setIsTabbarOpen(true);
    }
    setCurrentTabIdx(newValue);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'rgba(0 0 0 / 20%)',
        bottom: 0,
        left: 0,
        position: 'absolute',
        width: '100%',
      }}
    >
      <Collapse in={isTabbarOpen} sx={{ borderBlockStart: '1px solid #555' }}>
        <CustomTabPanel index={0} value={currentTabIdx}>
          <Editor
            editorMode="json-with-linter"
            height="150px"
            onChange={onVariablesChange}
            placeholder={translate('graphqlVariablesPlaceholder')}
            value={variables}
          />
        </CustomTabPanel>
        <CustomTabPanel index={1} value={currentTabIdx}>
          <Editor
            editorMode="json-with-linter"
            height="150px"
            onChange={onHeadersChange}
            placeholder={translate('graphqlHeadersPlaceholder')}
            value={headers}
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
