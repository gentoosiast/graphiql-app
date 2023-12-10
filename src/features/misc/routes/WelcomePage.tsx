import type { JSX } from 'react';
import { Link } from 'react-router-dom';

import { useI18NContext } from '@/providers/i18n';

export const WelcomePage = (): JSX.Element => {
  const { translate } = useI18NContext();

  return (
    <>
      <h1>Welcome</h1>
      <p>{translate('greeting')}</p>

      <nav>
        <Link to="/auth">Sign In / Sign Up Page</Link>
        <Link to="/main">Main Page</Link>
      </nav>
      <></>
    </>
  );
};
