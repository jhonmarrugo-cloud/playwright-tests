// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],

  timeout: 120000,

  use: {                    // 👈 MUY IMPORTANTE tener esto global
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },

  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.spec\.js/,
    },
    {
      name: 'chromium',
      dependencies: process.env.CI ? ['setup'] : [],   // 👈 MUY PRO (evita carreras)
      testIgnore: /.*\.setup\.spec\.js/,
      use: {
        storageState: 'storageState.json',
      },
    },
  ],
});
