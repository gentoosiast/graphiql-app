import '@testing-library/jest-dom/vitest';
import { afterAll, afterEach, beforeEach } from 'vitest';

import { server } from './msw/server';

beforeEach(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
