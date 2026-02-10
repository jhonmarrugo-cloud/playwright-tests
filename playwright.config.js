// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.spec\.js/,
      use: {
        browserName: 'chromium',
        headless: false,
      },
    },
    {
      name: 'chromium',
      testIgnore: /.*\.setup\.spec\.js/,
      use: {
        browserName: 'chromium',
        storageState: 'storageState.json',
        headless: false,
      },
    },
  ],
});
