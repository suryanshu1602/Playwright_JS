import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  testMatch: ['**/*_spec.ts', '**/*.spec.ts'],
});
