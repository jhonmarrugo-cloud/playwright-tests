const { test, expect } = require('@playwright/test');

test('Usuario entra al dashboard', async ({ page }) => {

  await page.goto('https://clients.onewrapp.com/companies');

   await page.waitForTimeout(3000);

});