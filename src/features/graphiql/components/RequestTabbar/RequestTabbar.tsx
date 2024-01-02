import { useState } from 'react';
import type { JSX, SyntheticEvent } from 'react';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Collapse, IconButton, Tab, Tabs, Tooltip } from '@mui/material';

import { useI18NContext } from '@/contexts/i18n';
import { useAppDispatch, useAppSelector } from '@/store';

import { setHeaders, setVariables } from '../../store';
import { CustomTabPanel } from '../CustomTabPanel';
import { Editor } from '../Editor';

const a11yProps = (index: number): Record<string, string> => {
  return {
    'aria-controls': `simple-tabpanel-${index}`,
    id: `simple-tab-${index}`,
  };
};

export const RequestTabbar = (): JSX.Element => {
  const { translate } = useI18NContext();
  const [currentTabIdx, setCurrentTabIdx] = useState(0);
  const [isTabbarOpen, setIsTabbarOpen] = useState(false);

  const headers = useAppSelector((state) => state.graphiql.headers);
  const variables = useAppSelector((state) => state.graphiql.variables);

  const dispatch = useAppDispatch();

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
        <CustomTabPanel index={0} isVisible={isTabbarOpen} value={currentTabIdx}>
          <Editor
            editorMode="json-with-linter"
            height="150px"
            onChange={(value) => dispatch(setVariables(value))}
            placeholder={translate('graphqlVariablesPlaceholder')}
            value={variables}
          />
        </CustomTabPanel>
        <CustomTabPanel index={1} isVisible={isTabbarOpen} value={currentTabIdx}>
          <Editor
            editorMode="json-with-linter"
            height="150px"
            onChange={(value) => dispatch(setHeaders(value))}
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
