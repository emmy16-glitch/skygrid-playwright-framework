import { Page, expect } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  async verifySidebar() {
    await expect(this.page.getByRole('link', { name: 'Dashboard', exact: true })).toBeVisible();
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
    await expect(this.page.getByText(/OPERATION DASHBOARD/i)).toBeVisible();
    await expect(this.page.getByText(/Central Command/i)).toBeVisible();
    await expect(this.page.getByText(/Active Aircraft/i)).toBeVisible();
    await expect(this.page.getByText(/Organizations/i)).toBeVisible();
    await expect(this.page.getByText(/Approved Mission/i)).toBeVisible();
    await expect(this.page.getByText(/Live Mission/i)).toBeVisible();
    await expect(this.page.getByText(/Pending Approval/i)).toBeVisible();
    await expect(this.page.getByText(/Open Alert/i)).toBeVisible();
  }

  async verifyRecentMissions() {
    await expect(this.page.getByText(/Recent Missions/i)).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'View All' }).first()).toBeVisible();

    const bodyText = await this.page.locator('body').innerText();
    expect(bodyText).toMatch(/organization/i);
    expect(bodyText).toMatch(/mission/i);
    expect(bodyText).toMatch(/pilot/i);
    expect(bodyText).toMatch(/status/i);
  }

  async verifyPagination() {
    await expect(this.page.getByRole('button', { name: /Next/i })).toBeVisible();
  }

  async verifyAlerts() {
    await expect(this.page.getByText(/Recent Alert/i)).toBeVisible();
    await expect(this.page.getByText(/Real-Time Feed/i)).toBeVisible();

    const bodyText = await this.page.locator('body').innerText();
    expect(bodyText).toMatch(/alert|telemetry|access|device|authentication|feed/i);
  }
}
