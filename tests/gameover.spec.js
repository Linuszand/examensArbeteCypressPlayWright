const { test, expect } = require('@playwright/test');

test('Game over zero lives and start over', async ({page}) => {
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.getByText('Where do you want to go, left, right or up?').isVisible();
    await page.getByRole('button', { name: 'up' }).click();
    await page.getByText('You see a bridge.').isVisible();
    await page.getByRole('img', { name: 'images/blobridge.jpg'}).isVisible();
    await page.getByRole('button', { name: 'walk across' }).click();
    let bridgeTriesLeft = 3;

// Loop until bridgeTriesLeft becomes 0
    while (bridgeTriesLeft > 0) {
        // castle of stone button
        await page.getByRole('button', { name: 'castle of stone' }).click();
        
        // go back button
        await page.getByRole('button', { name: 'go back' }).click();

        // walk across button
        await page.getByRole('button', { name: 'walk across' }).click();

        // update the bridgeTriesLeft value by getting the updated text content
        const bridgeTriesText = await page.textContent('#lives');
        const matches = bridgeTriesText.match(/Bridge tries left: (\d+)/);
        if (matches && matches[1]) {
            bridgeTriesLeft = parseInt(matches[1]);
        } else {
          console.log('Cannot parseInt...');
        }
    }
    await page.getByRole('img', {name: 'images/game-over.jpg'}).isVisible();
    await page.getByRole('button', {name: 'start over'}).click();
    await page.getByText('Where do you want to go, left right or up?').isVisible();
});

test('Game over troll run away, then continue', async ({page}) => {
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.getByText('Where do you want to go, left, right or up?').isVisible();
    await page.getByRole('button', { name: 'left' }).click();
    await page.getByText('You come across a giant sleeping troll, do you continue or run away?').isVisible();
    await page.getByRole('button', { name: 'run away' }).click();
    await page.getByText('You come back to where you started. Where do you want to go, left, right or up?').isVisible();
    await page.getByRole('button', { name: 'left' }).click();
    await page.getByRole('button', { name: 'continue' }).click();
    await page.getByText('You step on a branch, the troll awakens').isVisible();
    await page.getByRole('img', {name: 'images/sleepingtroll.png'}).isVisible();
});

test('Game over death by black knight', async ({page}) => {
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.getByRole('button', { name: 'up' }).click();
    await page.getByRole('button', { name: 'walk across' }).click();
    await page.getByRole('button', { name: 'castle of wood' }).click();
    await page.getByRole('button', { name: 'enter' }).click();
    await page.getByRole('button', { name: 'go up' }).click();
    await page.getByText('The black knight punches your head off.').isVisible();
    await page.getByRole('img', {name: 'images/game-over.jpg'}).isVisible();
});
    