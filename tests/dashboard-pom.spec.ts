import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test.describe('SkyGrid Dashboard - Page Object Model', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('john@gmail.com', 'john');
  });

  test('should verify full command center dashboard', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);

    await dashboardPage.verifySidebar();
    await dashboardPage.verifyMetrics();
    await dashboardPage.verifyRecentMissions();
    await dashboardPage.verifyPagination();
    await dashboardPage.verifyAlerts();
  });
});
