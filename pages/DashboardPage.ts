import { Page, expect } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  async verifySidebar() {
    await expect(this.page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Organization' })).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Fleet & Assets' })).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Mission Center' })).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Live Operations' })).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'People & Access' })).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Device & Security' })).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Audit Logs' })).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'System Settings' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Sign Out' }).first()).toBeVisible();
  }

  async verifyMetrics() {
    await expect(this.page.getByText('OPERATION DASHBOARD')).toBeVisible();
    await expect(this.page.getByText('Central Command')).toBeVisible();
    await expect(this.page.getByText('ACTIVE AIRCRAFT')).toBeVisible();
    await expect(this.page.getByText('57')).toBeVisible();
    await expect(this.page.getByText('ORGANIZATIONS')).toBeVisible();
    await expect(this.page.getByText('24')).toBeVisible();
    await expect(this.page.getByText('APPROVED MISSION')).toBeVisible();
    await expect(this.page.getByText('LIVE MISSION')).toBeVisible();
    await expect(this.page.getByText('PENDING APPROVAL')).toBeVisible();
    await expect(this.page.getByText('OPEN ALERT')).toBeVisible();
  }

  async verifyRecentMissions() {
    await expect(this.page.getByText('Recent Missions')).toBeVisible();
    await expect(this.page.getByRole('cell', { name: 'NAF Kaduna' })).toBeVisible();
    await expect(this.page.getByRole('cell', { name: 'Big Creek- Phase 2', exact: true })).toBeVisible();
    await expect(this.page.getByRole('cell', { name: 'B. Sarah' })).toBeVisible();
    await expect(this.page.getByRole('cell', { name: 'Skyline Tower', exact: true })).toBeVisible();
    await expect(this.page.getByRole('cell', { name: 'Harbor Expansion', exact: true })).toBeVisible();
  }

  async verifyPagination() {
    await expect(this.page.getByRole('button', { name: '1', exact: true })).toBeVisible();
    await expect(this.page.getByRole('button', { name: '2', exact: true })).toBeVisible();
    await expect(this.page.getByRole('button', { name: '11' })).toBeVisible();
    await expect(this.page.getByRole('button', { name: 'Next' })).toBeVisible();
  }

  async verifyAlerts() {
    await expect(this.page.getByText('Recent Alert')).toBeVisible();
    await expect(this.page.getByText('Real-Time Feed')).toBeVisible();
    await expect(this.page.getByText('Unauthorized Access Attempt').first()).toBeVisible();
    await expect(this.page.getByRole('link', { name: /Telemetry Data/i })).toBeVisible();
    await expect(this.page.getByRole('link', { name: /Geofence Breach/i })).toBeVisible();
    await expect(this.page.getByRole('link', { name: /Device Disabled/i })).toBeVisible();
  }
}
