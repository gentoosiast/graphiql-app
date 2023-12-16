import type { JSX } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Login, Register } from '../components';
import { AuthState } from '../enums';
import { getFormMode } from '../utils/get-form-mode';

const AuthPage = (): JSX.Element => {
  const location = useLocation();
  const formMode = getFormMode(location.state);
  const [isLogin, setIsLogin] = useState(formMode === 'login');

  console.log(AuthState.AUTHENTICATED);

  return isLogin ? <Login setIsLogin={setIsLogin} /> : <Register setIsLogin={setIsLogin} />;
};

export { AuthPage };
