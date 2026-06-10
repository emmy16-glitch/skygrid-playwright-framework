import { test, expect } from '@playwright/test';

test('SkyGrid login debug after submit', async ({ page }) => {
  await page.goto('https://skygridinc.live/login/?next=/');

  await page.getByLabel('Email').fill('john@gmail.com');
  await page.getByLabel('Password').fill('john');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.waitForLoadState('networkidle');

  console.log('AFTER LOGIN URL:', page.url());

  const text = await page.locator('body').innerText();
  console.log('AFTER LOGIN TEXT START');
  console.log(text);
  console.log('AFTER LOGIN TEXT END');

  await page.screenshot({
    path: 'artifacts/after-login.png',
    fullPage: true,
  });

  await expect(page.locator('body')).toBeVisible();
});
