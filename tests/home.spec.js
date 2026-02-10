const { test, expect } = require('@playwright/test');

test('Usuario entra al dashboard', async ({ page }) => {

  await page.goto('https://clients.onewrapp.com/companies');

  await page.waitForSelector('h1');

  await page.waitForTimeout(2000);

  await page.click('text=525');

  await page.waitForTimeout(5000);

  console.log('Ingreso correcto a la compañia 525');


});