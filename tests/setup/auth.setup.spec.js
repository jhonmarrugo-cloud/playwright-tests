const { test } = require('@playwright/test');

test('login', async ({ page }) => {

  test.setTimeout(120000);

  await page.goto('https://stgapi.onewrapp.com/');

  await page.waitForURL('**/companies');

  await page.context().storageState({
    path: 'storageState.json'
  });

});
