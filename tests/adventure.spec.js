// @ts-check
const { test, expect } = require('@playwright/test');
const randomer = Math.random();
let url = 'http://127.0.0.1:5500/index.html'



test('Go to Castle of Stone and enter', async ({ page }) => {
  await page.goto(url);
  await page.getByText('Where do you want to go, left, right or up?').isVisible();
  await page.getByRole('button', { name: 'up' }).click();
  await page.getByText('You see a bridge.').isVisible();
  
  await page.getByRole('img', { name: 'images/blobridge.jpg'}).isVisible();
  await page.getByRole('button', { name: 'walk across' }).click();
  if ( randomer > 0.5) {
    await page.getByText('You hear the bridge starting to creak. You hurry over to the other side before something happens. You see a road, leading you two places, you decide to go to the:').isVisible();
    await page.getByRole('img', { name: 'images/fantasy_world_14_by_avengerb6_dgmjjdh-pre.jpg'}).isVisible();
  } else {
    await page.getByText('You pass the bridge safely. You see a road, leading you two places, you decide to go to the:').isVisible();
    await page.getByRole('img', { name: 'images/fantasy_world_14_by_avengerb6_dgmjjdh-pre.jpg'}).isVisible();
  }
  await page.getByRole('button', { name: 'castle of stone' }).click();
  await page.getByText('As you arrive before the ancient castle, its formidable presence looms large against the backdrop of the desolate landscape. The walls, dark as the night itself, stand tall and imposing, their surface gleaming dully in the subdued light of the overcast sky. You decide to:').isVisible();
  await page.getByRole('img', { name: 'images/outsidedarkcastle.jpg'}).isVisible();
  await page.getByRole('button', { name: 'enter'}).click();
  await page.getByText("You enter the stone castle. There's only one way forward. You decide to:").isVisible();
  await page.getByRole('img', { name: 'images/darkcastle.jpg'}).isVisible();
});

test('Go to Castle of Wood and enter', async ({page}) => {
  await page.goto(url);
  await page.getByText('Where do you want to go, left, right or up?').isVisible();
  await page.getByRole('button', { name: 'up' }).click();
  await page.getByText('You see a bridge.').isVisible();
  
  await page.getByRole('img', { name: 'images/blobridge.jpg'}).isVisible();
  await page.getByRole('button', { name: 'walk across' }).click();
  if ( randomer > 0.5) {
    await page.getByText('You hear the bridge starting to creak. You hurry over to the other side before something happens. You see a road, leading you two places, you decide to go to the:').isVisible();
    await page.getByRole('img', { name: 'images/fantasy_world_14_by_avengerb6_dgmjjdh-pre.jpg'}).isVisible();
  } else {
    await page.getByText('You pass the bridge safely. You see a road, leading you two places, you decide to go to the:').isVisible();
    await page.getByRole('img', { name: 'images/fantasy_world_14_by_avengerb6_dgmjjdh-pre.jpg'}).isVisible();
    await page.getByRole('button', { name: 'castle of wood' }).click();
    await page.getByText('As you approach the castle of wood, the sky hangs heavy with oppressive grey clouds, suffocating any semblance of light. The first thing that strikes you is the blood-red hue of the rooftops, a stark contrast against the dreary backdrop, like freshly spilled gore staining the earth. You decide to:').isVisible();
    await page.getByRole('img', { name: 'images/wood-castle.png'}).isVisible();
    await page.getByRole('button', { name: 'enter' }).click();
    await page.getByText('As you enter the wooden castle, your gaze is immediately drawn to the black knight standing on the second level above the staircase. Its presence ominous, its armor gleaming darkly in the dim light. There are multiple pathways possible from here, you decide to:').isVisible();
    await page.getByRole('img', { name: 'images/image_ADS9BLZe_1713866202748_raw.jpg'}).isVisible();
  }
});

test('Deadend', async ({ page }) => {
    await page.goto(url);
    await page.getByRole('button', { name: 'right'}).click();
    await page.getByRole('button', { name: 'right'}).click();
    await page.getByText("You've already been here, stahp it.").isVisible();
});


  
