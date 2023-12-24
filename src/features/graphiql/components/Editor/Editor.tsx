import type { Extension, ReactCodeMirrorProps } from '@uiw/react-codemirror';

import type { JSX } from 'react';

import { json, jsonParseLinter } from '@codemirror/lang-json';
import { lintGutter, linter } from '@codemirror/lint';
import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';

import { theme, themeStyles, themeTweaks } from './theme';

type EditorMode = 'graphql' | 'json' | 'json-with-linter';

const getEditorExtension = (editorMode: EditorMode): Extension => {
  switch (editorMode) {
    case 'json':
      return json();
    case 'json-with-linter':
      return [json(), linter(jsonParseLinter()), lintGutter()];
    case 'graphql':
      return graphql();
    default:
      return json();
  }
};

export const Editor = ({
  editorMode = 'json',
  extensions = [],
  style,
  ...props
}: ReactCodeMirrorProps & { editorMode: EditorMode }): JSX.Element => {
  return (
    <CodeMirror
      extensions={[themeTweaks, getEditorExtension(editorMode)].concat(extensions)}
      style={{ ...themeStyles, ...style }}
      theme={theme}
      {...props}
    />
  );
};
