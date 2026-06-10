# SkyGrid Playwright QA Framework

This project is a Playwright + TypeScript QA automation framework for testing the SkyGrid Command Center web application.

## Features Tested
- Login
- Dashboard navigation
- Metrics cards
- Recent missions table
- Pagination
- Real-time alerts
- Negative login scenario

## Framework Structure
- `tests/` - automated test scripts
- `pages/` - Page Object Model classes
- `test-plans/` - test planning documents
- `manual-test-cases/` - manual QA test cases
- `exploratory-results/` - exploratory testing notes
- `reports/` - test summary reports

## Run Tests

```bash
npx playwright test --project=chromium
