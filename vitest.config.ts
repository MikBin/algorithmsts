import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['test/vector-similarity/*.test.ts'],
  },
});
