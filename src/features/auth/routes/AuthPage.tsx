import { type JSX, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '@/config/firebase';

import { Login } from '../components/Login';
import { Register } from '../components/Register';

const AuthPage = (): JSX.Element => {
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (auth.currentUser) {
      navigate('/', { replace: true });
    }
  });

  return isLogin ? <Login setIsLogin={setIsLogin} /> : <Register setIsLogin={setIsLogin} />;
};

export { AuthPage };
