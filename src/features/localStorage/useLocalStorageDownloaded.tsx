import { useLocalStorage } from 'usehooks-ts';

export default function Component(): JSX.Element {
  const [language, setLanguage] = useLocalStorage('sanJunipero-selectedLanguage', 'EN');

  const toggleTheme = (): void => {
    setLanguage((prevValue: string) => (prevValue === 'EN' ? 'RU' : 'EN'));
  };

  return (
    <button onClick={toggleTheme}>{`The current language is ${language ? `EN` : `RU`}`}</button>
  );
}
