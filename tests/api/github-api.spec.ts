import { test, expect } from '@playwright/test';

// Basic API test: we call the public GitHub API for the Playwright repository
// and verify that the response is successful and contains expected fields.
test.describe('GitHub API - Playwright repository', () => {
  test('returns correct repository metadata', async ({ request }) => {
    // 1. Send a GET request to the GitHub API for the Playwright repo.
    const response = await request.get(
      'https://api.github.com/repos/microsoft/playwright',
      {
        headers: {
          // Explicitly ask for the standard GitHub v3 JSON format.
          Accept: 'application/vnd.github+json',
        },
      }
    );

    // 2. The response should be successful (HTTP 200).
    expect(response.ok()).toBeTruthy();

    // 3. Parse the JSON body and verify key repository properties.
    const body = await response.json();

    // The full_name should be "microsoft/playwright".
    expect(body.full_name).toBe('microsoft/playwright');

    // The repository should not be private.
    expect(body.private).toBeFalsy();

    // The repository should have a non-empty description.
    expect(typeof body.description).toBe('string');
    expect(body.description.length).toBeGreaterThan(0);
  });
});
