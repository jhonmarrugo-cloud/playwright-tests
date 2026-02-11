const { test, expect } = require('@playwright/test');

test('Usuario entra a agregar proyecto', async ({ page }) => {

  test.setTimeout(120000);
  await page.goto('https://clients.onewrapp.com/companies');

  //Ingreso a compañia 525
  await page.waitForSelector('h1');
  await page.waitForTimeout(3000);
  await page.click('text=525');
  console.log('Ingreso correcto a proyecto 525');

  //Ingreso a agregar nuevo proyecto
  await page.waitForSelector('h1');
  await page.getByRole('button', { name: 'Add new project' }).click();
  await page.waitForTimeout(3000);
  console.log('Ingreso correcto a Agregar un Proyecto');

});