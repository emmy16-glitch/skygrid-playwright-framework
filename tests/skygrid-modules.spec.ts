import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('SkyGrid Module Smoke and UI Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('john@gmail.com', 'john');
  });

  test('should open Organization module', async ({ page }) => {
    await page.getByRole('link', { name: 'Organization' }).click();

    await expect(page).toHaveURL(/organization/i);
    await expect(page.locator('body')).toContainText(/organization/i);
  });

  test('should open Fleet & Assets module', async ({ page }) => {
    await page.getByRole('link', { name: 'Fleet & Assets' }).click();

    await expect(page).toHaveURL(/fleet|asset/i);
    await expect(page.locator('body')).toContainText(/fleet|asset|aircraft|drone/i);
  });

  test('should open Mission Center module', async ({ page }) => {
    await page.getByRole('link', { name: 'Mission Center' }).click();

    await expect(page).toHaveURL(/mission/i);
    await expect(page.locator('body')).toContainText(/mission/i);
  });

  test('should open Live Operations module', async ({ page }) => {
    await page.getByRole('link', { name: 'Live Operations' }).click();

    await expect(page).toHaveURL(/live|operation/i);
    await expect(page.locator('body')).toContainText(/live|operation|mission/i);
  });

  test('should open People & Access module', async ({ page }) => {
    await page.getByRole('link', { name: 'People & Access' }).click();

    await expect(page).toHaveURL(/people|access|user/i);
    await expect(page.locator('body')).toContainText(/people|access|user|role/i);
  });

  test('should open Device & Security module', async ({ page }) => {
    await page.getByRole('link', { name: 'Device & Security' }).click();

    await expect(page).toHaveURL(/device|security/i);
    await expect(page.locator('body')).toContainText(/device|security|authentication|access/i);
  });

  test('should open Audit Logs module', async ({ page }) => {
    await page.getByRole('link', { name: 'Audit Logs' }).click();

    await expect(page).toHaveURL(/audit|log/i);
    await expect(page.locator('body')).toContainText(/audit|log|activity/i);
  });

  test('should open System Settings module', async ({ page }) => {
    await page.getByRole('link', { name: 'System Settings' }).click();

    await expect(page).toHaveURL(/profile|setting/i);
    await expect(page.locator('body')).toContainText(/profile|setting|system|account|john/i);
  });
});
