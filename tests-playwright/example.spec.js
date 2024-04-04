// @ts-check
const { test, expect } = require('@playwright/test');

test('Go to Castle of Stone', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/index.html');
  await page.getByRole('button', { name: 'up' }).click();
  await page.getByRole('button', { name: 'walk across' }).click();
  await page.getByRole('button', { name: 'castle of stone' }).click();
  await page.getByText('As you approach the stone castle, its imposing silhouette rises against the backdrop of the dusky sky, standing as a sentinel of ancient grandeur. The outer walls, weathered by time and bearing the scars of countless battles, loom high above you, adorned with moss and ivy that cling tenaciously to the rugged stone surface. You decide to:').isVisible();
});