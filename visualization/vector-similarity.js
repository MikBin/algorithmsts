/* eslint-env browser */
import * as d3 from 'd3';
import { analysisResults } from './similarity-data.js';

// Helper to format numbers
const formatNumber = (num) => {
  if (num === null || num === undefined) return 'N/A';
  if (typeof num === 'string') return num;
  if (Math.abs(num) < 0.0001 && num !== 0) return num.toExponential(2);
  return num.toFixed(4);
};

// Render Benchmark Chart
const renderBenchmark = () => {
  const data = analysisResults.benchmark
    .sort((a, b) => a.avgTime - b.avgTime);

  const margin = { top: 20, right: 20, bottom: 150, left: 60 };
  const containerWidth = document.getElementById('benchmark-chart').clientWidth;
  const width = Math.max(containerWidth, data.length * 25) - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  const svg = d3.select('#benchmark-chart')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const x = d3.scaleBand()
    .range([0, width])
    .padding(0.1)
    .domain(data.map(d => d.name));

  const y = d3.scaleLinear()
    .range([height, 0])
    .domain([0, d3.max(data, d => d.avgTime)]);

  svg.append('g')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .selectAll('text')
    .attr('transform', 'translate(-10,0)rotate(-45)')
    .style('text-anchor', 'end')
    .style('font-size', '10px');

  svg.append('g')
    .call(d3.axisLeft(y));

  // Y Axis Label
  svg.append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 0 - margin.left)
    .attr('x', 0 - (height / 2))
    .attr('dy', '1em')
    .style('text-anchor', 'middle')
    .text('Time (ms)');

  svg.selectAll('.bar')
    .data(data)
    .enter().append('rect')
    .attr('class', 'bar')
    .attr('x', d => x(d.name))
    .attr('width', x.bandwidth())
    .attr('y', d => y(d.avgTime))
    .attr('height', d => height - y(d.avgTime))
    .append('title')
    .text(d => `${d.name}: ${formatNumber(d.avgTime)} ms`);
};

// Helper to render a table
const renderTable = (containerId, title, dataObj, vectors = null) => {
  const container = d3.select(containerId);

  const wrapper = container.append('div').style('margin-bottom', '30px');
  wrapper.append('h3').text(title);

  if (vectors) {
    const vecInfo = wrapper.append('div').style('margin-bottom', '10px').style('font-family', 'monospace').style('font-size', '12px');
    Object.entries(vectors).forEach(([key, val]) => {
        let displayVal = JSON.stringify(val);
        if (displayVal.length > 100) displayVal = displayVal.substring(0, 100) + '...';
        vecInfo.append('div').text(`${key}: ${displayVal}`);
    });
  }

  const table = wrapper.append('table');
  const thead = table.append('thead');
  const tbody = table.append('tbody');

  thead.append('tr')
    .selectAll('th')
    .data(['Function Name', 'Similarity Score'])
    .enter()
    .append('th')
    .text(d => d);

  const rows = tbody.selectAll('tr')
    .data(Object.entries(dataObj).sort((a, b) => {
        // Sort by value if numbers, otherwise keep string at bottom?
        // Actually let's just sort alphabetically by name for consistency
        return a[0].localeCompare(b[0]);
    }))
    .enter()
    .append('tr');

  rows.append('td').text(d => d[0]);
  rows.append('td').text(d => formatNumber(d[1]));
};

const renderOutliers = () => {
  analysisResults.outliersResiliencyTest.forEach((test) => {
    // Extract vector names dynamically
    const vecKeys = Object.keys(test).filter(k => k.startsWith('vec'));
    const vectors = {};
    vecKeys.forEach(k => vectors[k] = test[k]);

    renderTable('#outliers-container', test.testCase, test.similarities, vectors);
  });
};

const renderStressTests = () => {
  analysisResults.stressTests.forEach((test) => {
    const vecKeys = Object.keys(test).filter(k => k.includes('Vec')); // sparseVecA, baseVec, etc.
    const vectors = {};
    vecKeys.forEach(k => vectors[k] = test[k]);

    renderTable('#stress-container', test.testCase, test.similarities, vectors);
  });
};

const renderComparison = () => {
  const container = d3.select('#compare-container');

  Object.entries(analysisResults.similarityCompare).forEach(([type, data]) => {
    const col = container.append('div').style('flex', '1').style('min-width', '300px');

    // Just reuse renderTable logic but targeting the specific column div
    // We need to manually implement it here or refactor renderTable to accept a selection
    // Let's just reimplement quickly for flexibility

    col.append('h3').text(`Type: ${type}`);

    const vecKeys = Object.keys(data).filter(k => k.startsWith('vec'));
    const vecInfo = col.append('div').style('margin-bottom', '10px').style('font-family', 'monospace').style('font-size', '12px');
    vecKeys.forEach(k => {
        vecInfo.append('div').text(`${k}: ${JSON.stringify(data[k])}`);
    });

    const table = col.append('table');
    const thead = table.append('thead');
    const tbody = table.append('tbody');

    thead.append('tr')
      .selectAll('th')
      .data(['Function', 'Score'])
      .enter()
      .append('th')
      .text(d => d);

    const rows = tbody.selectAll('tr')
      .data(Object.entries(data.similarities).sort((a, b) => a[0].localeCompare(b[0])))
      .enter()
      .append('tr');

    rows.append('td').text(d => d[0]);
    rows.append('td').text(d => formatNumber(d[1]));
  });
};

const renderDemoMatrix = () => {
  const comparisons = analysisResults.comparisonDemo.comparisons;
  const funcs = Object.keys(comparisons).sort();
  const pairs = Object.keys(comparisons[funcs[0]]).sort(); // e.g., A_vs_B, A_vs_C

  const table = d3.select('#demo-matrix').append('table');
  const thead = table.append('thead');
  const tbody = table.append('tbody');

  // Header row
  const headerRow = thead.append('tr');
  headerRow.append('th').text('Function');
  pairs.forEach(pair => headerRow.append('th').text(pair));

  // Rows
  const rows = tbody.selectAll('tr')
    .data(funcs)
    .enter()
    .append('tr');

  rows.append('td').style('font-weight', 'bold').text(d => d);

  rows.selectAll('td.val')
    .data(funcName => pairs.map(pair => comparisons[funcName][pair]))
    .enter()
    .append('td')
    .text(d => formatNumber(d));
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderBenchmark();
  renderOutliers();
  renderStressTests();
  renderComparison();
  renderDemoMatrix();
});
