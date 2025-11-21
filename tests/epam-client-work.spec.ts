import { test, expect } from '@playwright/test';

test('Navigate to EPAM Services and verify Client Work', async ({ page }) => {
  // Open the browser in maximized mode
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Navigate to EPAM website
  await page.goto('https://www.epam.com/');

  // Click on "Services" from the header menu
  await page.getByRole('link', { name: 'Services' }).nth(1).click();

  // Click on "Explore Our Client Work" link
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  // Verify that the "Client Work" text is visible on the page
  await expect(page.getByText('Client Work').first()).toBeVisible();

  // Close the browser
  await page.close();
});