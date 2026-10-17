import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['test/**/*.test.ts'],
    coverage: {
      // Configured via v8 provider against measured baseline (node22/linux, 2026-10-17): L 86.08 / S 86.08 / B 91.52 / F 81.92
      // Worst-case (node 24): F 80.31 — floors set to worst-case with margin.
      provider: 'v8',
      include: ['src/**/*.ts'],
      exclude: ['src/types/**', 'src/interfaces.ts', 'src/**/interfaces/**'],
      thresholds: {
        lines: 85,
        statements: 85,
        branches: 90,
        functions: 80,
      },
    },
  },
});
