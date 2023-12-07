import type { JSX } from 'react';
import { Link } from 'react-router-dom';

import { I18NLanguage } from '@/config/i18n';
import { useI18NContext } from '@/providers/i18n';

export const WelcomePage = (): JSX.Element => {
  const { setLanguage, translate } = useI18NContext();

  return (
    <>
      <h1>Welcome</h1>
      <p>{translate('greeting')}</p>
      <button onClick={() => setLanguage(I18NLanguage.English)} type="button">
        Switch language to EN
      </button>
      <button onClick={() => setLanguage(I18NLanguage.Russian)} type="button">
        Switch language to RU
      </button>
      <nav>
        <Link to="/auth">Sign In / Sign Up Page</Link>
        <Link to="/main">Main Page</Link>
      </nav>
    </>
  );
};
