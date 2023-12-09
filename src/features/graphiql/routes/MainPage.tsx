import { type JSX, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '@/config/firebase';

export const MainPage = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) {
      navigate('/');
    }
  });

  return (
    <>
      <h1>Main Page</h1>
    </>
  );
};
