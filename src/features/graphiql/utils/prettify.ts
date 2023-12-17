export const graphqlPrettify = (query: string, indentSize = 2): string => {
  let indentLevel = 0;

  return query
    .replace(/{|}/g, (match) => (match === '{' ? '{\n' : '\n}\n'))
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .map((line) => {
      let indentModifier = 0;

      if (line.includes('}')) {
        indentLevel--;
      } else if (line.includes('{')) {
        indentLevel++;
        indentModifier = -1;
      }

      return `${' '.repeat((indentLevel + indentModifier) * indentSize)}${line}`;
    })
    .join('\n');
};

export const jsonPrettify = (json: unknown, indentSize = 2): string => {
  return JSON.stringify(json, null, indentSize);
};
