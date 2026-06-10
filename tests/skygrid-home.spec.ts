import { test, expect } from '@playwright/test';

test('SkyGrid homepage loads', async ({ page }) => {
  await page.goto('https://skygridinc.live');

  await expect(page).toHaveTitle(/SkyGrid|Sky/i);
});
