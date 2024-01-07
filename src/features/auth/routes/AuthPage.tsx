import type { JSX } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Login, Register } from '../components';
import { getFormMode } from '../utils/get-form-mode';

const AuthPage = (): JSX.Element => {
  const location = useLocation();
  const formMode = getFormMode(location.state);
  const [isLogin, setIsLogin] = useState(formMode === 'login');

  return isLogin ? <Login setIsLogin={setIsLogin} /> : <Register setIsLogin={setIsLogin} />;
};

export default AuthPage;
