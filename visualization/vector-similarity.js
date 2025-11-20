/* eslint-env browser */
import { analysisResults } from './similarity-data.js';

// Helper to format numbers
const formatNumber = (num) => {
  if (num === null || num === undefined) return 'N/A';
  if (typeof num === 'string') return num;
  if (Math.abs(num) < 0.0001 && num !== 0) return num.toExponential(2);
  return num.toFixed(4);
};

// --- DOM Helpers ---

const createEl = (tag, text = '', styles = {}) => {
  const el = document.createElement(tag);
  if (text) el.textContent = text;
  Object.assign(el.style, styles);
  return el;
};

const appendChildren = (parent, ...children) => {
  children.forEach((child) => parent.appendChild(child));
};

// --- Chart.js Renderers ---

const renderBenchmark = () => {
  const data = analysisResults.benchmark.sort((a, b) => a.avgTime - b.avgTime);
  const ctx = document.getElementById('benchmark-chart').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map((d) => d.name),
      datasets: [
        {
          label: 'Execution Time (ms)',
          data: data.map((d) => d.avgTime),
          backgroundColor: '#3498db',
          borderColor: '#2980b9',
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (context) => `${context.raw.toFixed(4)} ms`,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Time (ms)',
          },
        },
        x: {
          ticks: {
            autoSkip: false,
            maxRotation: 45,
            minRotation: 45,
          },
        },
      },
    },
  });
};

const renderVectorVisualization = () => {
  const vectors = analysisResults.comparisonDemo.vectors;
  const ctx = document.getElementById('vector-chart').getContext('2d');

  const colors = [
    '#e74c3c', // A - Red
    '#3498db', // B - Blue
    '#2ecc71', // C - Green
    '#9b59b6', // D - Purple
    '#f1c40f', // E - Yellow
  ];

  // Determine X-axis labels based on the longest vector (assuming all same length, but safe to check)
  const maxLength = Math.max(...Object.values(vectors).map((v) => v.length));
  const labels = Array.from({ length: maxLength }, (_, i) => i);

  const datasets = Object.entries(vectors).map(([key, data], index) => ({
    label: `Vector ${key}`,
    data: data,
    borderColor: colors[index % colors.length],
    backgroundColor: colors[index % colors.length],
    tension: 0.4, // Smooth curves
    pointRadius: 4,
    pointHoverRadius: 6,
  }));

  new Chart(ctx, {
    type: 'line',
    data: { labels, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (context) => `${context.dataset.label}: ${context.raw}`,
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Index',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Value',
          },
        },
      },
    },
  });
};

// --- Table Renderers ---

const renderTable = (containerSelector, title, dataObj, vectors = null) => {
  const container = document.querySelector(containerSelector);
  if (!container) return; // Guard clause for reusable logic if container doesn't exist (e.g. inside compare-container loops)

  const wrapper = createEl('div', '', { marginBottom: '30px' });
  const titleEl = createEl('h3', title);
  wrapper.appendChild(titleEl);

  if (vectors) {
    const vecInfo = createEl('div', '', {
      marginBottom: '10px',
      fontFamily: 'monospace',
      fontSize: '12px',
    });
    Object.entries(vectors).forEach(([key, val]) => {
      let displayVal = JSON.stringify(val);
      if (displayVal.length > 100)
        displayVal = displayVal.substring(0, 100) + '...';
      const line = createEl('div', `${key}: ${displayVal}`);
      vecInfo.appendChild(line);
    });
    wrapper.appendChild(vecInfo);
  }

  const table = createEl('table');
  const thead = createEl('thead');
  const tbody = createEl('tbody');
  table.appendChild(thead);
  table.appendChild(tbody);

  // Header
  const trHead = createEl('tr');
  ['Function Name', 'Similarity Score'].forEach((text) => {
    const th = createEl('th', text);
    trHead.appendChild(th);
  });
  thead.appendChild(trHead);

  // Rows
  Object.entries(dataObj)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([funcName, score]) => {
      const tr = createEl('tr');
      const tdName = createEl('td', funcName);
      const tdScore = createEl('td', formatNumber(score));
      appendChildren(tr, tdName, tdScore);
      tbody.appendChild(tr);
    });

  wrapper.appendChild(table);
  container.appendChild(wrapper);
};

const renderOutliers = () => {
  analysisResults.outliersResiliencyTest.forEach((test) => {
    const vecKeys = Object.keys(test).filter((k) => k.startsWith('vec'));
    const vectors = {};
    vecKeys.forEach((k) => (vectors[k] = test[k]));
    renderTable(
      '#outliers-container',
      test.testCase,
      test.similarities,
      vectors
    );
  });
};

const renderStressTests = () => {
  analysisResults.stressTests.forEach((test) => {
    const vecKeys = Object.keys(test).filter((k) => k.includes('Vec'));
    const vectors = {};
    vecKeys.forEach((k) => (vectors[k] = test[k]));
    renderTable('#stress-container', test.testCase, test.similarities, vectors);
  });
};

const renderComparison = () => {
  const container = document.querySelector('#compare-container');

  Object.entries(analysisResults.similarityCompare).forEach(([type, data]) => {
    const col = createEl('div', '', { flex: '1', minWidth: '300px' });

    // Title
    col.appendChild(createEl('h3', `Type: ${type}`));

    // Vector Info
    const vecKeys = Object.keys(data).filter((k) => k.startsWith('vec'));
    const vecInfo = createEl('div', '', {
      marginBottom: '10px',
      fontFamily: 'monospace',
      fontSize: '12px',
    });
    vecKeys.forEach((k) => {
      const line = createEl('div', `${k}: ${JSON.stringify(data[k])}`);
      vecInfo.appendChild(line);
    });
    col.appendChild(vecInfo);

    // Table
    const table = createEl('table');
    const thead = createEl('thead');
    const tbody = createEl('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);

    // Header
    const trHead = createEl('tr');
    ['Function', 'Score'].forEach((text) => {
      trHead.appendChild(createEl('th', text));
    });
    thead.appendChild(trHead);

    // Rows
    Object.entries(data.similarities)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .forEach(([funcName, score]) => {
        const tr = createEl('tr');
        tr.appendChild(createEl('td', funcName));
        tr.appendChild(createEl('td', formatNumber(score)));
        tbody.appendChild(tr);
      });

    col.appendChild(table);
    container.appendChild(col);
  });
};

const renderDemoMatrix = () => {
  const comparisons = analysisResults.comparisonDemo.comparisons;
  const funcs = Object.keys(comparisons).sort();
  const pairs = Object.keys(comparisons[funcs[0]]).sort();

  const container = document.querySelector('#demo-matrix');
  const table = createEl('table');
  const thead = createEl('thead');
  const tbody = createEl('tbody');
  table.appendChild(thead);
  table.appendChild(tbody);

  // Header
  const headerRow = createEl('tr');
  headerRow.appendChild(createEl('th', 'Function'));
  pairs.forEach((pair) => headerRow.appendChild(createEl('th', pair)));
  thead.appendChild(headerRow);

  // Rows
  funcs.forEach((funcName) => {
    const tr = createEl('tr');
    const tdFunc = createEl('td', funcName);
    tdFunc.style.fontWeight = 'bold';
    tr.appendChild(tdFunc);

    pairs.forEach((pair) => {
      const val = comparisons[funcName][pair];
      tr.appendChild(createEl('td', formatNumber(val)));
    });
    tbody.appendChild(tr);
  });

  container.appendChild(table);
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderVectorVisualization();
  renderBenchmark();
  renderOutliers();
  renderStressTests();
  renderComparison();
  renderDemoMatrix();
});
