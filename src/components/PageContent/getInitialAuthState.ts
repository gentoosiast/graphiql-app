import type { User } from 'firebase/auth';

import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '@/config/firebase';

export const getInitialAuthState = async (): Promise<User | null> => {
  return new Promise((resolve) => {
    const unsub = onAuthStateChanged(auth, (user) => {
      resolve(user);
      unsub();
    });
  });
};
