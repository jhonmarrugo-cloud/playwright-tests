const { test } = require('@playwright/test');

test('login', async ({ page }) => {

  test.setTimeout(120000); // 2 minutos

  await page.goto('https://stgapi.onewrapp.com/');

  // 👇 loguéate manualmente
  await page.waitForURL('**/companies');

  await page.context().storageState({
    path: 'storageState.json'
  });

});
