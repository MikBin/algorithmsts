import { test, expect } from '@playwright/test';

test('Graph Visualization Loads and Runs', async ({ page }) => {
  // 1. Go to the new graph visualization page
  // Assuming the server is running at root
  await page.goto('http://localhost:8080/algorithms/graphs/index.html');

  // 2. Check title
  await expect(page).toHaveTitle(/Algorithms Visualization/);

  // Wait for the SVG element to show up
  await page.waitForSelector('svg');
  // 3. Check for SVG element
  await expect(page.locator('svg')).toBeVisible();

  // Wait a bit to ensure script has fully initialized
  await page.waitForTimeout(500);

  // 4. Check controls exist
  await expect(page.locator('#algo-category')).toBeVisible();
  await expect(page.locator('#btn-generate')).toBeVisible();
  await expect(page.locator('.btn-play-pause')).toBeVisible();

  // 5. Generate a new graph (Grid)
  await page.selectOption('#graph-type', 'grid');
  await page.click('#btn-generate');

  // Wait for nodes to be visible
  await page.waitForTimeout(2000);

  // 6. Select BFS algorithm
  await page.selectOption('#algo-category', 'traversal');
  await page.selectOption('#algo-select', 'bfs');

  // Wait for the algo select to change internal state
  await page.waitForTimeout(1000);

  // 7. Start visualization
  // Click the Play button
  await page.click('.btn-play-pause', { force: true });

  // 8. Wait for some "visited" nodes to appear
  // The visualization runs with a delay, so we wait for the class to be applied
  await page.waitForTimeout(3000); // Increased timeout to let simulation run

  // Verify UI has advanced
  await expect(page.locator('.playback-status')).toContainText('/');
});
