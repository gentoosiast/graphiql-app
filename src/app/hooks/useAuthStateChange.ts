import { useEffect } from 'react';

import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '@/config/firebase';
import { setAuthState } from '@/features/auth';
import { setUser } from '@/features/users';
import { store } from '@/store';

export const useAuthStateChange = (): void => {
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      const authState = user ? 'AUTHENTICATED' : 'UNAUTHENTICATED';

      store.dispatch(setAuthState(authState));
      store.dispatch(setUser({ email: user?.email ?? null }));
    });

    return () => {
      unsub();
    };
  }, []);
};
