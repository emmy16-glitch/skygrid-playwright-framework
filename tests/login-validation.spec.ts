import { test, expect } from '@playwright/test';

test.describe('SkyGrid Login Validation', () => {
  test('should not login with empty credentials', async ({ page }) => {
    await page.goto('https://skygridinc.live/login/?next=/');

    await page.getByRole('button', { name: /sign in/i }).click();

    await expect(page).toHaveURL(/login/i);
  });

  test('should not login with wrong credentials', async ({ page }) => {
    await page.goto('https://skygridinc.live/login/?next=/');

    await page.getByLabel('Email').fill('wrong@example.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('wrongpassword');
    await page.getByRole('button', { name: /sign in/i }).click();

    await expect(page).toHaveURL(/login/i);
    await expect(page.locator('body')).not.toContainText(/COMMAND CENTER/i);
  });
});
