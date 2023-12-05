import type { JSX } from 'react';
import { Link } from 'react-router-dom';

export const WelcomePage = (): JSX.Element => {
  return (
    <div>
      <h1>Welcome</h1>
      <nav>
        <Link to="/auth">Sign In / Sign Up Page</Link>
        <Link to="/main">Main Page</Link>
      </nav>
    </div>
  );
};
