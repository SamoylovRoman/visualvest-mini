import { test, expect } from '@playwright/test';

// Group of basic UI tests for the public Playwright website.
test.describe('Playwright website - basic navigation', () => {
  // Increase timeout for all tests in this suite because we depend
  // on an external website and network conditions can be slow.
  test.describe.configure({ timeout: 90000 });

  // Very basic smoke test: we open the Playwright home page
  // and verify that it loads and shows expected UI elements.
  test('Playwright home page is reachable and has correct title', async ({ page }) => {
    // 1. Navigate to the Playwright home page.
    //    We use "commit" to only wait until the navigation is committed,
    //    not until all scripts and resources are fully loaded.
    await page.goto('https://playwright.dev/', {
      waitUntil: 'commit',
    });

    // 2. Basic UI check: the page title should contain "Playwright".
    await expect(page).toHaveTitle(/Playwright/);

    // 3. Check that the "Get started" link is visible in the hero section.
    //    This is one of the key call-to-action elements on the homepage.
    const getStartedLink = page.getByRole('link', { name: 'Get started' });
    await expect(getStartedLink).toBeVisible();
  });

  // Second test: verify that clicking on "Get started" navigates
  // to the documentation "Installation" page.
  test('Playwright docs Installation page is reachable from the home page', async ({ page }) => {
    // 1. Open the Playwright home page.
    await page.goto('https://playwright.dev/', {
      waitUntil: 'commit',
    });

    // 2. Click on the "Get started" link in the hero section.
    const getStartedLink = page.getByRole('link', { name: 'Get started' });
    await getStartedLink.click();

    // 3. Verify that the URL points to a docs page.
    await expect(page).toHaveURL(/\/docs\/?/i);

    // 4. Check that the docs page has a main heading (level 1)
    //    and that it is the "Installation" page.
    const mainHeading = page.getByRole('heading', { level: 1 });
    await expect(mainHeading).toBeVisible();
    await expect(mainHeading).toHaveText(/Installation/i);

    // 5. Verify that the page contains a typical installation snippet
    //    to make sure we are really on an installation guide, not some other docs page.
    await expect(page.getByText(/npm init playwright@latest/)).toBeVisible();
  });
});
