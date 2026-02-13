const { test, expect } = require('@playwright/test');

test('Encontrar Proyecto', async ({ page }) => {

  test.setTimeout(120000);
  await page.goto('https://stgclients.onewrapp.com/companies/2/projects');

  //Encontrar proyecto
  await page.waitForSelector('h2');
  const projectCard = page.locator('h2', {hasText: 'Project Automation'});
  await expect(projectCard).toBeVisible();
  console.log('Se encontró el proyecto');

  //Seleccionar menú desplegable
  const menuProject = page.locator('.project-card.pointer').filter({ hasText: 'project automation'});
  await expect(menuProject).toBeVisible();
  const menuButton = menuProject.locator('[aria-haspopup="menu"]');
  await menuButton.click();
  await page.getByRole('menuitem', {name: 'delete project'}).click();
});
