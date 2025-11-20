/* eslint-env browser */
import { createApp, ref, computed, onMounted, watch, h } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { analysisResults } from './similarity-data.js';

// --- Helpers ---

const formatNumber = (num) => {
  if (num === null || num === undefined) return 'N/A';
  if (typeof num === 'string') return num;
  if (Math.abs(num) < 0.0001 && num !== 0) return num.toExponential(2);
  return num.toFixed(4);
};

// --- Components ---

const ChartComponent = {
  props: ['type', 'data', 'options'],
  setup(props) {
    const canvasRef = ref(null);
    let chartInstance = null;

    const renderChart = () => {
      if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
      }
      if (!canvasRef.value || !props.data) return;

      const ctx = canvasRef.value.getContext('2d');
      chartInstance = new Chart(ctx, {
        type: props.type,
        data: props.data,
        options: props.options || { responsive: true, maintainAspectRatio: false }
      });
    };

    onMounted(renderChart);

    watch(() => props.data, renderChart, { deep: true });

    return { canvasRef };
  },
  template: `<canvas ref="canvasRef"></canvas>`
};

const SortableTable = {
  props: ['title', 'vectors', 'headers', 'rows'],
  setup(props) {
    const sortColumn = ref(null); // Index of the column being sorted. Null initially.
    const sortDirection = ref('asc'); // 'asc' or 'desc'

    const toggleSort = (index) => {
      if (sortColumn.value === index) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
      } else {
        sortColumn.value = index;
        sortDirection.value = 'asc'; // Default to asc for new column
      }
    };

    const sortedRows = computed(() => {
      if (!props.rows) return [];

      // Clone rows to avoid mutating original prop
      const rows = [...props.rows];

      if (sortColumn.value === null) return rows;

      // We assume rows are arrays of values matching headers
      // e.g., ['Pearson', 0.9]

      rows.sort((rowA, rowB) => {
        const valA = rowA[sortColumn.value];
        const valB = rowB[sortColumn.value];

        // Helper to get sortable value
        const getVal = (v) => {
           if (v === null || v === undefined || v === 'N/A') return -Infinity; // Push N/A to bottom or top? let's treat as very small
           if (typeof v === 'string' && !isNaN(parseFloat(v)) && isFinite(v)) return parseFloat(v);
           return v;
        };

        const a = getVal(valA);
        const b = getVal(valB);

        if (a === b) return 0;

        let comparison = 0;
        if (a < b) comparison = -1;
        else if (a > b) comparison = 1;

        // String comparison
        if (typeof a === 'string' && typeof b === 'string') {
            comparison = a.localeCompare(b);
        }

        return sortDirection.value === 'asc' ? comparison : -comparison;
      });
      return rows;
    });

    const formatValue = (val) => {
        // If it's a number, format it. If string, leave it.
        if (typeof val === 'number') return formatNumber(val);
        return val;
    };

    const formatVector = (vec) => {
        let s = JSON.stringify(vec);
        if (s.length > 100) s = s.substring(0, 100) + '...';
        return s;
    }

    return {
      sortColumn,
      sortDirection,
      sortedRows,
      toggleSort,
      formatValue,
      formatVector
    };
  },
  template: `
    <div style="margin-bottom: 30px;">
      <h3 v-if="title">{{ title }}</h3>
      <div v-if="vectors" class="vector-info">
        <div v-for="(vec, key) in vectors" :key="key">{{ key }}: {{ formatVector(vec) }}</div>
      </div>
      <table>
        <thead>
          <tr>
            <th v-for="(header, index) in headers" :key="index" @click="toggleSort(index)" :data-testid="'header-' + index">
              {{ header }}
              <span v-if="sortColumn === index" class="sort-icon">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rIndex) in sortedRows" :key="rIndex">
            <td v-for="(cell, cIndex) in row" :key="cIndex">{{ formatValue(cell) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
};

// --- Main App ---

const App = {
  components: {
    ChartComponent,
    SortableTable
  },
  setup() {
    // --- Data Prep helpers ---

    const prepareTableData = (similarities) => {
       // Convert object { func: score } to array of arrays [[func, score]]
       return Object.entries(similarities).map(([k, v]) => [k, v]);
    };

    // --- Outliers ---
    const outlierTests = computed(() => {
      return analysisResults.outliersResiliencyTest.map(test => ({
        testCase: test.testCase,
        vectors: Object.keys(test)
           .filter(k => k.startsWith('vec'))
           .reduce((obj, k) => { obj[k] = test[k]; return obj; }, {}),
        rows: prepareTableData(test.similarities)
      }));
    });

    // --- Stress Tests ---
    const stressTests = computed(() => {
        return analysisResults.stressTests.map(test => ({
            testCase: test.testCase,
            vectors: Object.keys(test)
                .filter(k => k.includes('Vec'))
                .reduce((obj, k) => { obj[k] = test[k]; return obj; }, {}),
            rows: prepareTableData(test.similarities)
        }));
    });

    // --- Comparison ---
    const comparisonTests = computed(() => {
        const result = {};
        Object.entries(analysisResults.similarityCompare).forEach(([type, data]) => {
             result[type] = {
                 vectors: Object.keys(data)
                    .filter(k => k.startsWith('vec'))
                    .reduce((obj, k) => { obj[k] = data[k]; return obj; }, {}),
                 rows: prepareTableData(data.similarities)
             };
        });
        return result;
    });

    // --- Demo Matrix ---
    const demoMatrixData = computed(() => {
        const comparisons = analysisResults.comparisonDemo.comparisons;
        const funcs = Object.keys(comparisons).sort();
        const pairs = Object.keys(comparisons[funcs[0]]).sort();

        const headers = ['Function', ...pairs];
        const rows = funcs.map(funcName => {
            const row = [funcName];
            pairs.forEach(pair => {
                row.push(comparisons[funcName][pair]);
            });
            return row;
        });

        return { headers, rows };
    });

    // --- Charts Data ---

    const vectorChartData = computed(() => {
        const vectors = analysisResults.comparisonDemo.vectors;
        const colors = ['#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#f1c40f'];
        const maxLength = Math.max(...Object.values(vectors).map((v) => v.length));
        const labels = Array.from({ length: maxLength }, (_, i) => i);

        return {
            labels,
            datasets: Object.entries(vectors).map(([key, data], index) => ({
                label: `Vector ${key}`,
                data: data,
                borderColor: colors[index % colors.length],
                backgroundColor: colors[index % colors.length],
                tension: 0.4,
                pointRadius: 4
            }))
        };
    });

    const vectorChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: { tooltip: { callbacks: { label: (ctx) => `${ctx.dataset.label}: ${ctx.raw}` } } },
        scales: {
            x: { title: { display: true, text: 'Index' } },
            y: { title: { display: true, text: 'Value' } }
        }
    };

    const benchmarkChartData = computed(() => {
        const data = [...analysisResults.benchmark].sort((a, b) => a.avgTime - b.avgTime);
        return {
            labels: data.map(d => d.name),
            datasets: [{
                label: 'Execution Time (ms)',
                data: data.map(d => d.avgTime),
                backgroundColor: '#3498db',
                borderColor: '#2980b9',
                borderWidth: 1
            }]
        };
    });

    const benchmarkChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            y: { beginAtZero: true, title: { display: true, text: 'Time (ms)' } },
            x: { ticks: { autoSkip: false, maxRotation: 45, minRotation: 45 } }
        }
    };

    // --- Nonlinear Analysis ---

    const filters = ref({
        type: 'all',
        size: 'all',
        noise: 'all'
    });

    const nonlinearInsights = computed(() => {
        return analysisResults.nonLinearAnalysis ? analysisResults.nonLinearAnalysis.insights : [];
    });

    const filteredNonlinearData = computed(() => {
         if (!analysisResults.nonLinearAnalysis) return [];
         return analysisResults.nonLinearAnalysis.detailedResults.filter(item => {
            const typeMatch = filters.value.type === 'all' || item.type === filters.value.type;
            const sizeMatch = filters.value.size === 'all' || item.size.toString() === filters.value.size;
            const noiseMatch = filters.value.noise === 'all' ||
                (item.noiseSettings && item.noiseSettings.level && item.noiseSettings.level.toString() === filters.value.noise);
            return typeMatch && sizeMatch && noiseMatch;
         });
    });

    // Derived table data for nonlinear analysis (flat structure for sorting)
    const nonlinearTableRows = computed(() => {
        const rows = [];
        filteredNonlinearData.value.forEach(item => {
            const noiseType = item.noiseSettings ? item.noiseSettings.type : 'N/A';
            const noiseLevel = item.noiseSettings ? item.noiseSettings.level : 'N/A';

            Object.entries(item.metrics).forEach(([metricName, metricData]) => {
                rows.push([
                    item.type,
                    item.size,
                    noiseType,
                    noiseLevel,
                    metricName,
                    metricData.score,
                    metricData.timeMs
                ]);
            });
        });
        return rows;
    });

    const applyFilters = () => {
        // Trigger reactivity if needed, though computed properties handle it automatically.
        // This method might be redundant with v-model but good for explicit "Apply" action UX
    };

    const nonlinearScoresData = computed(() => {
        const data = filteredNonlinearData.value;
        const labels = data.map(item => item.label);
        const similarityFunctions = [
            'normalizedCosineSimilarity', 'pearsonCorrelationSimilarity', 'euclideanSimilarity',
            'polynomialKernelSimilarity', 'rbfKernelSimilarity', 'computeVectorSimilarityMeanStdPower'
        ];
        const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'];

        const datasets = similarityFunctions.map((funcName, index) => ({
            label: funcName.replace(/([A-Z])/g, ' $1').trim(),
            data: data.map(item => item.metrics[funcName] ? item.metrics[funcName].score : null),
            backgroundColor: colors[index % colors.length]
        }));

        return { labels, datasets };
    });

    const nonlinearScoresOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'top' } },
        scales: {
            y: { beginAtZero: true, max: 1, title: { display: true, text: 'Similarity Score' } },
            x: { ticks: { maxRotation: 60, minRotation: 60 } }
        }
    };

    const nonlinearPerformanceData = computed(() => {
        // Group by function type and avg performance
        const data = filteredNonlinearData.value;
        const performanceData = {};

        data.forEach(item => {
            if (!performanceData[item.type]) performanceData[item.type] = {};
            Object.entries(item.metrics).forEach(([func, metrics]) => {
                if (!performanceData[item.type][func]) performanceData[item.type][func] = [];
                performanceData[item.type][func].push(metrics.timeMs);
            });
        });

        const functionTypes = Object.keys(performanceData);
        const similarityFunctions = [
            'normalizedCosineSimilarity', 'pearsonCorrelationSimilarity', 'euclideanSimilarity',
            'polynomialKernelSimilarity', 'rbfKernelSimilarity', 'computeVectorSimilarityMeanStdPower'
        ];
        const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'];

        const datasets = similarityFunctions.map((funcName, index) => ({
            label: funcName.replace(/([A-Z])/g, ' $1').trim(),
            data: functionTypes.map(type => {
                const times = performanceData[type][funcName];
                if (!times) return 0;
                return times.reduce((a, b) => a + b, 0) / times.length;
            }),
            backgroundColor: colors[index % colors.length]
        }));

        return {
            labels: functionTypes.map(t => t.charAt(0).toUpperCase() + t.slice(1)),
            datasets
        };
    });

    const nonlinearPerformanceOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'top' } },
        scales: {
            y: { beginAtZero: true, title: { display: true, text: 'Average Execution Time (ms)' } }
        }
    };

    return {
        vectorChartData,
        vectorChartOptions,
        benchmarkChartData,
        benchmarkChartOptions,
        outlierTests,
        stressTests,
        comparisonTests,
        demoMatrixHeaders: demoMatrixData.value.headers,
        demoMatrixRows: demoMatrixData.value.rows,
        nonlinearScoresData,
        nonlinearScoresOptions,
        nonlinearPerformanceData,
        nonlinearPerformanceOptions,
        nonlinearInsights,
        nonlinearTableRows,
        filters,
        applyFilters
    };
  }
};

createApp(App).mount('#app');
