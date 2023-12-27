import type { JSX } from 'react';

type Props = {
  onChange: (value: string) => void;
  placeholder: string;
  value: string;
};

export const EditorMock = ({ onChange, placeholder, value }: Props): JSX.Element => {
  return (
    <textarea
      defaultValue={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    ></textarea>
  );
};
