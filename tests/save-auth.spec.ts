import { test, expect } from '@playwright/test';

test('save SkyGrid login session', async ({ page }) => {
  await page.goto('https://skygridinc.live/login/?next=/');

  await page.getByLabel('Email').fill('john@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('john');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page.getByText('COMMAND CENTER')).toBeVisible();

  await page.context().storageState({ path: 'auth/skygrid-auth.json' });
});
