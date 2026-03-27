const { test, expect } = require('@playwright/test');

test('Sortable tables functionality', async ({ page }) => {
  // Debug: Print console logs from the browser
  page.on('console', msg => console.log(`BROWSER CONSOLE: ${msg.text()}`));
  page.on('pageerror', exception => console.log(`BROWSER ERROR: ${exception}`));

  await page.goto(`http://localhost:8080/vector-similarity/index.html`);

  // Wait for Vue to mount
  await page.waitForSelector('#app');

  const outlierTable = page.getByTestId('outliers-table').first();

  // Wait for the header to appear (implies data loaded and rendered)
  const headerName = outlierTable.getByTestId('header-0');
  await headerName.waitFor({ state: 'visible', timeout: 5000 });

  // Click "Function Name" (Index 0) to sort Ascending
  await headerName.click();
  await expect(headerName).toContainText('↑');

  // Helper
  const getValuesFromTable = async (tableLocator, colIndex) => {
    const rows = tableLocator.locator('tbody tr');
    const values = [];
    // Only verify first 50 values to prevent massive delays traversing huge tables in Playwright
    const count = Math.min(await rows.count(), 50);
    for (let i = 0; i < count; i++) {
      const cell = rows.nth(i).locator('td').nth(colIndex);
      values.push(await cell.innerText());
    }
    return values;
  };

  let names = await getValuesFromTable(outlierTable, 0);
  const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
  expect(names).toEqual(sortedNames);

  await headerName.click();
  await expect(headerName).toContainText('↓');

  names = await getValuesFromTable(outlierTable, 0);
  const descNames = [...sortedNames].reverse();
  expect(names).toEqual(descNames);

  const headerScore = outlierTable.getByTestId('header-1');
  await headerScore.click();

  const scores = await getValuesFromTable(outlierTable, 1);
  const parseScore = (s) => s === 'N/A' ? -Infinity : parseFloat(s);

  const sortedScores = [...scores].sort((a, b) => {
      const valA = parseScore(a);
      const valB = parseScore(b);
      return valA - valB;
  });

  expect(scores).toEqual(sortedScores);

  const nonlinearTable = page.getByTestId('nonlinear-table');
  const headerNonlinearScore = nonlinearTable.getByTestId('header-5');
  await headerNonlinearScore.click();

  const nlScores = await getValuesFromTable(nonlinearTable, 5);
  const sortedNlScores = [...nlScores].sort((a, b) => parseFloat(a) - parseFloat(b));
  expect(nlScores).toEqual(sortedNlScores);

  const headerTime = nonlinearTable.getByTestId('header-6');
  await headerTime.click();
  await headerTime.click();

  const times = await getValuesFromTable(nonlinearTable, 6);
  const sortedTimesDesc = [...times].sort((a, b) => parseFloat(b) - parseFloat(a));
  expect(times).toEqual(sortedTimesDesc);
});
