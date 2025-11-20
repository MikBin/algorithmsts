import { describe, test, expect, beforeAll, afterAll, beforeEach, afterEach } from 'vitest';
import { spawn, ChildProcess } from 'child_process';
import path from 'path';
import { chromium, Browser, Page } from 'playwright';

const PORT = 8080;
const BASE_URL = `http://localhost:${PORT}/visualization/vector-similarity.html`;
const ROOT_DIR = path.resolve(__dirname, '../../');

let serverProcess: ChildProcess;
let browser: Browser;
let page: Page;

beforeAll(async () => {
  // Start a local server (Python 3)
  serverProcess = spawn('python3', ['-m', 'http.server', PORT.toString()], {
    cwd: ROOT_DIR,
    stdio: 'ignore'
  });

  // Wait for server to be ready
  await new Promise(resolve => setTimeout(resolve, 2000));

  browser = await chromium.launch();
});

afterAll(async () => {
  if (browser) await browser.close();
  if (serverProcess) serverProcess.kill();
});

beforeEach(async () => {
    page = await browser.newPage();
    // Enable debug mode via query param for tests
    await page.goto(`${BASE_URL}?debug=true`);
    // Wait for data to load (chart render)
    await page.waitForSelector('canvas', { timeout: 10000 });
});

afterEach(async () => {
    if (page) await page.close();
});

describe('Vector Similarity Visualization Filters', () => {
  test('should render charts initially', async () => {
    const canvases = await page.$$('canvas');
    expect(canvases.length).toBeGreaterThan(0);

    // Verify nonlinear chart is visible.
    // We target .chart-container canvas because <chart-component> tag is replaced.
    const nonlinearChart = await page.locator('.chart-container canvas').last();
    await expect(nonlinearChart.isVisible()).resolves.toBe(true);
  });

  test('should verify dynamic options populate correctly', async () => {
    // Since we fixed the code to be dynamic, the dropdowns should now contain
    // the values present in the data.

    // Check Size dropdown contains '200' (which is in the data)
    const sizeOptions = await page.locator('#vector-size-filter option').allTextContents();
    expect(sizeOptions).toContain('200');
    expect(sizeOptions).toContain('All Sizes');

    // Check Noise Level dropdown contains '0.1', '0.5', '1' (from data)
    const noiseOptions = await page.locator('#noise-level-filter option').allTextContents();
    expect(noiseOptions).toContain('0.1');
    expect(noiseOptions).toContain('0.5');
    expect(noiseOptions).toContain('1');
  });

  test('should show data when filtering by valid dynamic options', async () => {
    // Select '200' which should now exist
    await page.selectOption('#vector-size-filter', '200');
    await page.click('button:has-text("Apply Filters")');

    // Check filtered items count in Debug Info
    const debugInfoText = await page.locator('#debug-panel').textContent();
    // It should not say "Filtered: 0"
    expect(debugInfoText).not.toContain('Filtered: 0');

    const tableRows = await page.locator('div[data-testid="nonlinear-table"] tbody tr');
    const rowCount = await tableRows.count();
    expect(rowCount).toBeGreaterThan(0);
  });

  test('should log debugging info', async () => {
      const debugPanel = await page.locator('#debug-panel');
      await expect(debugPanel.isVisible()).resolves.toBe(true);
      const text = await debugPanel.textContent();
      expect(text).toContain('Total:');
      expect(text).toContain('Filtered:');
  });

  test('should toggle debug panel visibility', async () => {
      // Navigate without ?debug=true
      await page.goto(BASE_URL);
      await page.waitForSelector('canvas');

      const debugPanel = await page.locator('#debug-panel');
      // Should be hidden initially
      await expect(debugPanel.isVisible()).resolves.toBe(false);

      // Click toggle button
      await page.click('button:has-text("Debug")');
      // Should become visible
      await expect(debugPanel.isVisible()).resolves.toBe(true);

      // Click toggle button again
      await page.click('button:has-text("Debug")');
      // Should be hidden again
      await expect(debugPanel.isVisible()).resolves.toBe(false);
  });
});
