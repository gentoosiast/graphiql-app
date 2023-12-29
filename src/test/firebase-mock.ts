import type { Auth, NextFn, User } from 'firebase/auth';

import { vi } from 'vitest';

const mockFirebase = {
  auth: vi.fn().mockReturnValue({
    currentUser: null,
    signInWithEmailAndPassword: vi.fn(),
    signOut: vi.fn(),
  }),
};

const authStateFn = (auth: Auth, observerFn: NextFn<User | null>): (() => void) => {
  observerFn(auth.currentUser);

  return () => {};
};

vi.mock('@/config/firebase', () => mockFirebase);
vi.mock('firebase/auth', () => ({ onAuthStateChanged: authStateFn }));
