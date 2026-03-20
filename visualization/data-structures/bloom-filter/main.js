import * as d3 from 'd3';
import { BloomFilter, defaultHash } from '../../../src/data-structures/bloom-filter/index.ts';

let m = 50;
let k = 3;
let bloomFilter = new BloomFilter(m, k);
let itemsAdded = 0;

// Colors for different hash functions
const colors = d3.scaleOrdinal(d3.schemeCategory10);

const width = 1000;
const height = 150;
const margin = { top: 40, right: 20, bottom: 40, left: 20 };
let bitWidth = (width - margin.left - margin.right) / m;
const bitHeight = 40;

const svg = d3.select('#viz-container')
  .append('svg').attr('role', 'img').attr('aria-label', 'Visualization').attr('tabindex', '0')
  .attr('width', width)
  .attr('height', height);

const tooltip = d3.select('#tooltip');

let bitArrayData = Array(m).fill().map((_, i) => ({
  index: i,
  set: false,
  addedBy: [] // Track which items set this bit
}));

function updateViz() {
  const t = svg.transition().duration(500);

  // Bit cell rects
  const cells = svg.selectAll('.bit-cell')
    .data(bitArrayData, d => d.index);

  cells.enter()
    .append('rect')
    .attr('class', 'bit-cell')
    .attr('x', d => margin.left + d.index * bitWidth)
    .attr('y', margin.top)
    .attr('width', bitWidth - 2)
    .attr('height', bitHeight)
    .attr('rx', 3)
    .attr('ry', 3)
    .attr('fill', '#ecf0f1')
    .on('mouseover', (event, d) => {
      if (d.addedBy.length > 0) {
        tooltip.style('opacity', 1)
          .html(`Bit ${d.index} set by: <br> ${d.addedBy.join(', ')}`)
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 28) + 'px');
      }
    })
    .on('mouseout', () => {
      tooltip.style('opacity', 0);
    })
    .merge(cells)
    .transition(t)
    .attr('x', d => margin.left + d.index * bitWidth)
    .attr('width', bitWidth - 2)
    .attr('fill', d => d.set ? '#2ecc71' : '#ecf0f1'); // Default filled color

  cells.exit().remove();

  // Bit text values (0 or 1)
  const texts = svg.selectAll('.bit-text')
    .data(bitArrayData, d => d.index);

  texts.enter()
    .append('text')
    .attr('class', 'bit-text')
    .attr('x', d => margin.left + d.index * bitWidth + (bitWidth - 2) / 2)
    .attr('y', margin.top + bitHeight / 2)
    .text(d => d.set ? '1' : '0')
    .attr('fill', d => d.set ? '#fff' : '#333')
    .merge(texts)
    .transition(t)
    .attr('x', d => margin.left + d.index * bitWidth + (bitWidth - 2) / 2)
    .text(d => d.set ? '1' : '0')
    .attr('fill', d => d.set ? '#fff' : '#333');

  texts.exit().remove();

  // Bit index labels
  const indices = svg.selectAll('.bit-index')
    .data(bitArrayData, d => d.index);

  indices.enter()
    .append('text')
    .attr('class', 'bit-index')
    .attr('x', d => margin.left + d.index * bitWidth + (bitWidth - 2) / 2)
    .attr('y', margin.top + bitHeight + 15)
    .text(d => d.index)
    .merge(indices)
    .transition(t)
    .attr('x', d => margin.left + d.index * bitWidth + (bitWidth - 2) / 2)
    .text(d => d.index);

  indices.exit().remove();

  updateStats();
}

function updateStats() {
  const bitsSetCount = bitArrayData.filter(d => d.set).length;
  const fillRatio = (bitsSetCount / m) * 100;

  // Theoretical FPR calculation: (1 - e^(-kn/m))^k
  // Or simply based on actual fill ratio: (bitsSet/m)^k
  const actualFill = bitsSetCount / m;
  const fpr = Math.pow(actualFill, k) * 100;

  d3.select('#stat-items').text(itemsAdded);
  d3.select('#stat-fill').text(fillRatio.toFixed(1) + '%');
  d3.select('#stat-fpr').text(fpr.toFixed(2) + '%');
}

// Helper to expose internal hash logic to visualize
function getHashIndices(item) {
  const indices = [];
  // Use a temporary BloomFilter instance just to extract logic, or reimplement the basic string hash
  // Since we can't easily spy on the private methods without TypeScript complaining or modifying source,
  // we will duplicate the default hash logic here purely for UI demonstration purposes.
  // Wait, BloomFilter uses an internal hashFn, default one is exported if we want, but we can also just
  // patch the instance or reproduce the logic to get the same indices.

  // Actually, we can use the exact logic from defaultHash in bloomFilter.ts:
  const str = typeof item === 'string' ? item : JSON.stringify(item);

  for (let i = 0; i < k; i++) {
    indices.push(defaultHash(str, i) % m);
  }
  return indices;
}

function logAction(item, indices, action) {
  const logContainer = d3.select('#log-container');
  // Clear default message if present
  if (logContainer.select('div').style('color') === 'rgb(153, 153, 153)') {
    logContainer.html('');
  }

  const entry = logContainer.insert('div', ':first-child')
    .attr('class', 'log-entry');

  const actionColor = action === 'Check' ? '#3498db' : '#2ecc71';

  entry.append('strong')
    .style('color', actionColor)
    .text(`${action} '${item}': `);

  indices.forEach((idx, i) => {
    entry.append('span')
      .attr('class', 'hash-calc')
      .style('background-color', colors(i))
      .text(`h${i}=${idx}`);
  });

  if (action === 'Check') {
    const isPresent = bloomFilter.mightContain(item);
    entry.append('span')
      .style('margin-left', '10px')
      .style('font-weight', 'bold')
      .style('color', isPresent ? '#2ecc71' : '#e74c3c')
      .text(` Result: ${isPresent ? 'Might contain (True)' : 'Definitely not (False)'}`);
  }
}

async function highlightBits(indices, isCheck = false) {
  for (let i = 0; i < indices.length; i++) {
    const idx = indices[i];

    // Highlight the specific bit being accessed
    svg.selectAll('.bit-cell')
      .filter(d => d.index === idx)
      .transition().duration(200)
      .attr('fill', colors(i))
      .attr('stroke', '#333')
      .attr('stroke-width', 2);

    await new Promise(r => setTimeout(r, 400));

    // Return to normal color
    svg.selectAll('.bit-cell')
      .filter(d => d.index === idx)
      .transition().duration(200)
      .attr('stroke', '#ccc')
      .attr('stroke-width', 1)
      .attr('fill', d => d.set ? '#2ecc71' : '#ecf0f1');
  }
}

d3.select('#add-item').on('click', async () => {
  const val = d3.select('#item-value').property('value');
  if (!val) return;

  const indices = getHashIndices(val);
  logAction(val, indices, 'Add');

  bloomFilter.add(val);
  itemsAdded++;

  // Update internal visual state
  indices.forEach(idx => {
    bitArrayData[idx].set = true;
    if (!bitArrayData[idx].addedBy.includes(val)) {
      bitArrayData[idx].addedBy.push(val);
    }
  });

  await highlightBits(indices, false);
  updateViz();
  d3.select('#item-value').property('value', '');
});

d3.select('#check-item').on('click', async () => {
  const val = d3.select('#item-value').property('value');
  if (!val) return;

  const indices = getHashIndices(val);
  logAction(val, indices, 'Check');

  await highlightBits(indices, true);
});

d3.select('#clear-filter').on('click', () => {
  bloomFilter.reset();
  itemsAdded = 0;
  bitArrayData = Array(m).fill().map((_, i) => ({
    index: i,
    set: false,
    addedBy: []
  }));
  d3.select('#log-container').html('<div style="color: #999; font-style: italic;">Enter an item and click Add or Check to see hash functions in action...</div>');
  updateViz();
});

d3.select('#apply-settings').on('click', () => {
  const newM = parseInt(d3.select('#filter-size').property('value'), 10);
  const newK = parseInt(d3.select('#hash-count').property('value'), 10);

  if (newM > 0 && newK > 0) {
    m = newM;
    k = newK;
    bloomFilter = new BloomFilter(m, k);
    itemsAdded = 0;

    // Update SVG scaling for new M
    bitWidth = (width - margin.left - margin.right) / m;

    bitArrayData = Array(m).fill().map((_, i) => ({
      index: i,
      set: false,
      addedBy: []
    }));

    d3.select('#log-container').html('<div style="color: #999; font-style: italic;">Enter an item and click Add or Check to see hash functions in action...</div>');

    svg.selectAll('*').remove();
    updateViz();
  }
});

// Initial draw
updateViz();
