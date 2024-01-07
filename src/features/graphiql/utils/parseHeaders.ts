import { parseEditorCodeToObject } from './parseEditorCodeToObject';

export const parseHeaders = (value: string): Headers => {
  const headersObj = parseEditorCodeToObject(value, 'Headers');

  const headers = new Headers();

  if (!value) {
    return headers;
  }

  Object.entries(headersObj).forEach(([key, value]) => {
    if (typeof value !== 'string') {
      throw new Error('Malformed headers');
    }

    headers.set(key, value);
  });

  return headers;
};
