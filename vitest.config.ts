import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['test/**/*.test.ts'],
    coverage: {
      // Configured 2026-10-17 via v8 provider against measured baseline
      provider: 'v8',
      include: ['src/**/*.ts'],
      exclude: ['src/types/**', 'src/interfaces.ts', 'src/**/interfaces/**'],
      thresholds: {
        lines: 86,
        statements: 86,
        branches: 90,
        functions: 81,
      },
    },
  },
});
