import type { JSX } from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Login } from '../components/Login';
import { Register } from '../components/Register';
import { AuthState } from '../enums';
import { useAuth } from '../hooks/use-auth';
import { getFormMode } from '../utils/get-form-mode';

const AuthPage = (): JSX.Element => {
  const location = useLocation();
  const formMode = getFormMode(location.state);
  const [isLogin, setIsLogin] = useState(formMode === 'login');

  const { authState } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (authState === AuthState.AUTHENTICATED) {
      navigate('/main', { replace: true });
    }
  }, [authState, navigate]);

  return isLogin ? <Login setIsLogin={setIsLogin} /> : <Register setIsLogin={setIsLogin} />;
};

export { AuthPage };
