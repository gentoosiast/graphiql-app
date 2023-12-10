import { type JSX, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Login } from '../components/Login';
import { Register } from '../components/Register';
import { AuthState } from '../enums';
import { useAuth } from '../hooks/use-auth';

const AuthPage = (): JSX.Element => {
  const [isLogin, setIsLogin] = useState(true);

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
