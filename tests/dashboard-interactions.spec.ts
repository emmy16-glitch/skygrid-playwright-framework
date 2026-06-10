import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('SkyGrid Dashboard Interactions', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('john@gmail.com', 'john');
  });

  test('should allow dashboard search input to receive text', async ({ page }) => {
    const searchBox = page.locator(
      'input[placeholder*="Search" i], input[type="search"], input[name*="search" i], input[id*="search" i]'
    ).first();

    await expect(searchBox).toBeVisible();
    await searchBox.fill('mission');

    await expect(searchBox).toHaveValue('mission');
  });

  test('should show recent missions section and View All link', async ({ page }) => {
    await expect(page.getByText(/Recent Missions/i)).toBeVisible();
    await expect(page.getByRole('link', { name: /View All/i }).first()).toBeVisible();
  });

  test('should show dashboard pagination controls', async ({ page }) => {
    await expect(page.getByRole('button', { name: /Next/i })).toBeVisible();
  });

  test('should show recent alert feed', async ({ page }) => {
    await expect(page.getByText(/Recent Alert/i)).toBeVisible();
    await expect(page.getByText(/Real-Time Feed/i)).toBeVisible();

    const bodyText = await page.locator('body').innerText();
    expect(bodyText).toMatch(/alert|access|device|authentication|telemetry|feed/i);
  });

  test('should keep user authenticated on dashboard refresh', async ({ page }) => {
    await page.reload();

    await expect(page.getByText(/COMMAND CENTER/i)).toBeVisible();
    await expect(page.getByText(/OPERATION DASHBOARD/i)).toBeVisible();
  });
});
