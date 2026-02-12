const { test, expect } = require('@playwright/test');

test('Agregar un nuevo proyecto', async ({ page }) => {

  test.setTimeout(120000);
  await page.goto('https://clients.onewrapp.com/companies');

  //Ingreso a compañia 525
  await page.waitForSelector('h1');
  await page.click('text=525');
  console.log('Ingreso correcto a la compañia 525');
  

   //Ingreso a la pantalla "Agregar nuevo proyecto"
  await page.waitForSelector('h1');
  await page.getByRole('button', { name: 'Add new project' }).click();
  console.log('Ingreso a la pantalla "Agregar un Proyecto"');

  // Estado
  await page.click('#mat-select-value-3');
  await page.getByRole('option', { name: 'On production' }).click();
  // Tipo
  await page.click('#mat-select-value-5');
  await page.click('#mat-option-9');
  // Nombre
  await page.fill('#mat-input-2', 'Project Automation');
  // Abreviación
  await page.fill('#mat-input-3', 'PAQA');
  // Episodios
  await page.fill('#mat-input-12', '10');
  // Unidades
  await page.fill('#mat-input-5', '2');
  console.log('El formulario se llenó con los campos obligatorios');
  // Guardar
  await page.getByRole('button', { name: 'Save' }).click();
  console.log('Se agregó proyecto correctamente');
});