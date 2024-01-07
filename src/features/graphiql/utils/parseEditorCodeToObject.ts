export const parseEditorCodeToObject = (str: string, errorSubject: string): object => {
  try {
    const obj: unknown = JSON.parse(str);

    if (obj && typeof obj === 'object') {
      return obj;
    }

    throw new Error(`Impossible to parse ${errorSubject} into an object`);
  } catch {
    throw new Error(`Error while parsing ${errorSubject}`);
  }
};
