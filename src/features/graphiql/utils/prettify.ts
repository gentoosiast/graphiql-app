export const prettify = (query: string, indentSize = 2): string => {
  let indentLevel = 0;

  return query
    .replace(/{|}/g, (match) => (match === '{' ? '{\n' : '\n}\n'))
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .map((line) => {
      if (line.includes('}')) {
        indentLevel--;
      } else if (line.includes('{')) {
        indentLevel++;
      }

      return `${' '.repeat(indentLevel * indentSize)}${line}`;
    })
    .join('\n');
};
