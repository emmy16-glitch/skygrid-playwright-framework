import { test } from '@playwright/test';

test('inspect current page', async ({ page }) => {
  await page.goto('https://skygridinc.live');

  await page.waitForLoadState('networkidle');

  console.log('URL:', page.url());

  const text = await page.locator('body').innerText();

  console.log('====================');
  console.log(text);
  console.log('====================');

  await page.screenshot({
    path: 'artifacts/current-page.png',
    fullPage: true
  });
});
