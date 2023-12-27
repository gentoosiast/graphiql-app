import { vi } from 'vitest';

const mockFirebase = {
  auth: vi.fn().mockReturnValue({
    currentUser: null,
    signInWithEmailAndPassword: vi.fn(),
    signOut: vi.fn(),
  }),
};

vi.mock('@/config/firebase', () => mockFirebase);
vi.mock('firebase/auth', () => ({ onAuthStateChanged: vi.fn() }));
