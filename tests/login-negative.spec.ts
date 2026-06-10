import { test, expect } from '@playwright/test';

test('invalid login should fail', async ({ page }) => {
  await page.goto('https://skygridinc.live/login/?next=/');

  await page.getByLabel('Email').fill('wrong@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('wrongpass');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL(/login/);
});
