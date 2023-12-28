import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  build: {
    cssMinify: 'lightningcss',
  },
  css: {
    transformer: 'lightningcss',
  },
  plugins: [tsconfigPaths(), react()],
  test: {
    coverage: {
      all: true,
      exclude: [
        'src/test/**/*',
        '**/types.ts',
        '**/*.d.ts',
        '**/index.ts',
        'src/main.tsx',
        'src/config/**/*',
        'src/**/*/types/*',
        'src/**/*/enums.ts',
      ],
      include: ['src/**/*'],
      provider: 'v8',
      reporter: ['text'],
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setupTests.ts'],
  },
});
