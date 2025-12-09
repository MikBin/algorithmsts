import { test, expect } from '@playwright/test';

test('Graph Visualization Loads and Runs', async ({ page }) => {
  // 1. Go to the new graph visualization page
  // Assuming the server is running at root
  await page.goto('http://localhost:8080/visualization/algorithms/graphs/index.html');

  // 2. Check title
  await expect(page).toHaveTitle(/Graph Algorithms Visualization/);

  // 3. Check for SVG element
  await expect(page.locator('svg')).toBeVisible();

  // 4. Check controls exist
  await expect(page.locator('#algo-category')).toBeVisible();
  await expect(page.locator('#btn-generate')).toBeVisible();
  await expect(page.locator('#btn-start')).toBeVisible();

  // 5. Generate a new graph (Grid)
  await page.selectOption('#graph-type', 'grid');
  await page.click('#btn-generate');

  // Wait for nodes to be visible
  await expect(page.locator('.node').first()).toBeVisible();

  // 6. Select BFS algorithm
  await page.selectOption('#algo-category', 'traversal');
  await page.selectOption('#algo-select', 'bfs');

  // 7. Start visualization
  await page.click('#btn-start');

  // 8. Wait for some "visited" nodes to appear
  // The visualization runs with a delay, so we wait for the class to be applied
  await page.waitForTimeout(1000);
  await expect(page.locator('.node circle.visited').first()).toBeVisible();

  // 9. Take screenshot
  await page.screenshot({ path: 'graph_viz_running.png' });
});
