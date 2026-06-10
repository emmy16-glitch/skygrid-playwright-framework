import { test, expect } from '@playwright/test';

test.describe('SkyGrid Authenticated Dashboard Deep Test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://skygridinc.live/login/?next=/');

    await page.getByLabel('Email').fill('john@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('john');
    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page.getByText('COMMAND CENTER')).toBeVisible();
  });

  test('sidebar navigation should be visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Organization' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Fleet & Assets' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Mission Center' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Live Operations' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'People & Access' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Device & Security' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Audit Logs' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'System Settings' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign Out' }).first()).toBeVisible();
  });

  test('dashboard metric cards should show operational values', async ({ page }) => {
    await expect(page.getByText('OPERATION DASHBOARD')).toBeVisible();
    await expect(page.getByText('Central Command')).toBeVisible();

    await expect(page.getByText('ACTIVE AIRCRAFT')).toBeVisible();
    await expect(page.getByText('57')).toBeVisible();

    await expect(page.getByText('ORGANIZATIONS')).toBeVisible();
    await expect(page.getByText('24')).toBeVisible();

    await expect(page.getByText('APPROVED MISSION')).toBeVisible();
    await expect(page.getByText('LIVE MISSION')).toBeVisible();
    await expect(page.getByText('PENDING APPROVAL')).toBeVisible();
    await expect(page.getByText('OPEN ALERT')).toBeVisible();
  });

  test('recent missions table should display mission records', async ({ page }) => {
    await expect(page.getByText('Recent Missions')).toBeVisible();
    await expect(page.getByRole('link', { name: 'View All' }).first()).toBeVisible();

    await expect(page.getByRole('cell', { name: 'NAF Kaduna' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Big Creek- Phase 2', exact: true })).toBeVisible();
    await expect(page.getByRole('cell', { name: '3D Map' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'B. Sarah' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'draft' }).first()).toBeVisible();

    await expect(page.getByRole('cell', { name: 'NAF Abuja' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Skyline Tower', exact: true })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'review' })).toBeVisible();

    await expect(page.getByRole('cell', { name: 'NAF Lagos' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Harbor Expansion', exact: true })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'approved' })).toBeVisible();
  });

  test('pagination should be available', async ({ page }) => {
    await expect(page.getByRole('button', { name: '1', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: '2', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: '11' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Next' })).toBeVisible();
  });

  test('recent alert and real-time feed should be visible', async ({ page }) => {
    await expect(page.getByText('Recent Alert')).toBeVisible();
    await expect(page.getByText('Real-Time Feed')).toBeVisible();

    await expect(page.getByText('Unauthorized Access Attempt').first()).toBeVisible();
    await expect(page.getByText('Multiple failed login attempts detected')).toBeVisible();

    await expect(page.getByRole('link', { name: /Telemetry Data/i })).toBeVisible();
    await expect(page.getByText('Connection lost from NAF KA SN 0234')).toBeVisible();

    await expect(page.getByRole('link', { name: /Geofence Breach/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Device Disabled/i })).toBeVisible();
  });
});
