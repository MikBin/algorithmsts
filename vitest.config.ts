import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['test/**/*.test.ts'],
    coverage: {
      // v8 is not installed in this repo; istanbul is the supported provider.
      provider: 'istanbul',
      // The 100% gate is scoped to the vector-similarity module (the focus of
      // the 0.1.0 cleanup). Broaden `include` to gate additional modules.
      include: ['src/vector-similarity/**'],
      thresholds: {
        lines: 100,
        statements: 100,
        branches: 100,
        functions: 100,
      },
    },
  },
});
