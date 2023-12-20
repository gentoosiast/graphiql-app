import { CSSProperties } from 'react';

import { tokyoNightStormInit } from '@uiw/codemirror-theme-tokyo-night-storm';
import { EditorView } from '@uiw/react-codemirror';

import 'hack-font/build/web/hack.css';

export const theme = tokyoNightStormInit({
  settings: {
    fontFamily: 'Hack, monospace',
  },
});

export const themeStyles: CSSProperties = { fontSize: 12 };

export const themeTweaks = EditorView.theme({
  '&.cm-editor': {
    padding: '5px 0',
  },
});
