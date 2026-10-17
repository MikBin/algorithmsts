import { describe, test, expect, beforeAll, afterAll, beforeEach, afterEach } from "vitest";
import path from "path";
import { spawn, ChildProcess } from "child_process";
import { chromium, Browser, Page } from "playwright";

const PORT = 8080;
const BASE_URL = `/vector-similarity/index.html`;
const ROOT_DIR = path.resolve(__dirname, "../../");

let serverProcess: ChildProcess;
let browser: Browser;
let page: Page;

beforeAll(async () => {
  // We need to serve dist/visualization using vite preview
  serverProcess = spawn(
    "npx",
    [
      "vite",
      "preview",
      "dist/visualization/",
      "--outDir",
      ".",
      "--port",
      PORT.toString(),
      "--strictPort",
    ],
    {
      cwd: ROOT_DIR,
    },
  );

  await new Promise((resolve) => setTimeout(resolve, 2000));

  try {
    browser = await chromium.launch();
  } catch (e: any) {
    if (e.message.includes("Executable doesn't exist")) {
      throw e; // Fail loudly
    }
    throw e;
  }
}, 60000);

afterAll(async () => {
  if (serverProcess) {
    serverProcess.kill();
  }
});

beforeEach(async () => {
  page = await browser.newPage();
  const url = `http://localhost:${PORT}${BASE_URL}?debug=true`;
  console.log("Navigating to", url);
  const response = await page.goto(url);
  if (response?.status() !== 200) {
    throw new Error(`Navigation returned status ${response?.status()}`);
  }
  await page.waitForSelector("canvas", { timeout: 10000 });
}, 60000);

afterEach(async () => {
  if (page) await page.close();
});

describe("Vector Similarity Visualization Filters", () => {
  test("should render charts initially", async () => {
    const canvases = await page.$$("canvas");
    expect(canvases.length).toBeGreaterThan(0);

    const nonlinearChart = await page.locator(".chart-container canvas").last();
    await expect(nonlinearChart.isVisible()).resolves.toBe(true);
  });

  test("should verify dynamic options populate correctly", async () => {
    const sizeOptions = await page.locator("#vector-size-filter option").allTextContents();
    expect(sizeOptions).toContain("200");
    expect(sizeOptions).toContain("All Sizes");

    const noiseOptions = await page.locator("#noise-level-filter option").allTextContents();
    expect(noiseOptions).toContain("0.1");
    expect(noiseOptions).toContain("0.5");
  });

  test("should show data when filtering by valid dynamic options", async () => {
    await page.selectOption("#vector-size-filter", "200");
    await page.click('button:has-text("Apply Filters")');

    await page.waitForSelector('div[data-testid="nonlinear-table"] tbody tr', { timeout: 10000 });

    const debugPanel = await page.locator("#debug-panel");
    const text = await debugPanel.textContent();
    expect(text).toContain("Total:");
    expect(text).toContain("Filtered:");
    expect(text).not.toContain("Filtered: 0");

    const tableRows = await page.locator('div[data-testid="nonlinear-table"] tbody tr');
    const rowCount = await tableRows.count();
    expect(rowCount).toBeGreaterThan(0);
  });

  test("should log debugging info", async () => {
    const debugPanel = await page.locator("#debug-panel");
    await expect(debugPanel.isVisible()).resolves.toBe(true);
    const text = await debugPanel.textContent();
    expect(text).toContain("Total:");
    expect(text).toContain("Filtered:");
  });

  test("should toggle debug panel visibility", async () => {
    await page.goto(`http://localhost:${PORT}${BASE_URL}`);
    await page.waitForSelector("canvas", { timeout: 10000 });

    const debugPanel = await page.locator("#debug-panel");
    await expect(debugPanel.isVisible()).resolves.toBe(false);

    await page.click('button:has-text("Debug")');
    await expect(debugPanel.isVisible()).resolves.toBe(true);

    await page.click('button:has-text("Debug")');
    await expect(debugPanel.isVisible()).resolves.toBe(false);
  });
});
