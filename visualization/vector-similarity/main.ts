/* eslint-env browser */
import { createApp, ref, computed, onMounted, watch, defineComponent } from 'vue';
import Chart from 'chart.js/auto';
import { analysisResults } from './similarity-data.js';
import * as VectorSimilarity from '../../src/vector-similarity/index.js';

const _style = getComputedStyle(document.documentElement);
const COLOR_SORTED = _style.getPropertyValue('--color-sorted').trim();
const COLOR_COMPARING = _style.getPropertyValue('--color-comparing').trim();
const COLOR_ACTIVE = _style.getPropertyValue('--color-active').trim();
const COLOR_DEFAULT = _style.getPropertyValue('--color-default').trim();
const COLOR_PRIMARY_DARK = _style.getPropertyValue('--color-primary-dark').trim();
const COLOR_VISITED = _style.getPropertyValue('--color-visited').trim();
const COLOR_HIGHLIGHT = _style.getPropertyValue('--color-highlight').trim();
const COLOR_SUCCESS = _style.getPropertyValue('--color-success').trim();
const COLOR_VISITED_BG = _style.getPropertyValue('--color-visited-bg').trim();
const COLOR_DANGER = _style.getPropertyValue('--color-danger').trim();
const COLOR_BACKGROUND_HOVER = _style.getPropertyValue('--color-background-hover').trim();
const COLOR_TEXT_MUTED = _style.getPropertyValue('--color-text-muted').trim();
const COLOR_TEXT_DARK = _style.getPropertyValue('--color-text-dark').trim();


// --- Helpers ---

const formatNumber = (num) => {
  if (num === null || num === undefined) return 'N/A';
  if (typeof num === 'string') return num;
  if (Math.abs(num) < 0.0001 && num !== 0) return num.toExponential(2);
  return num.toFixed(4);
};

// --- Components ---

const ChartComponent = defineComponent({
  props: ['type', 'data', 'options'],
  setup(props) {
    const canvasRef = ref<HTMLCanvasElement | null>(null);
    let chartInstance: Chart | null = null;

    const renderChart = () => {
      if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
      }
      if (!canvasRef.value || !props.data) return;

      const ctx = canvasRef.value.getContext('2d');
      if (!ctx) return;
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
});

const SortableTable = defineComponent({
  props: ['title', 'vectors', 'headers', 'rows'],
  setup(props) {
    const sortColumn = ref<number | null>(null); // Index of the column being sorted. Null initially.
    const sortDirection = ref<'asc'|'desc'>('asc'); // 'asc' or 'desc'

    const toggleSort = (index: number) => {
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

      rows.sort((rowA: any, rowB: any) => {
        if (sortColumn.value === null) return 0;
        const valA = rowA[sortColumn.value];
        const valB = rowB[sortColumn.value];

        // Helper to get sortable value
        const getVal = (v: any) => {
           if (v && typeof v === 'object' && 'value' in v) {
             v = v.value;
           }
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

    const formatValue = (val: any) => {
        // If it's a number, format it. If string, leave it.
        if (typeof val === 'number') return formatNumber(val);
        return val;
    };

    const formatVector = (vec: any) => {
        let s = JSON.stringify(vec);
        if (s.length > 100) s = s.substring(0, 100) + '...';
        return s;
    }

    // New prop for cell styling logic?
    // Alternatively, let's make the calculator pass HTML strings or objects?
    // But SortableTable renders {{ formatValue(cell) }}.

    // Let's upgrade SortableTable to support custom rendering or style.
    // We can check if `cell` is an object { value, style, class }.
    const getCellDisplayValue = (cell: any) => {
        if (cell && typeof cell === 'object' && 'value' in cell) {
            return formatValue(cell.value);
        }
        return formatValue(cell);
    };

    const getCellAttributes = (cell: any) => {
         if (cell && typeof cell === 'object' && ('style' in cell || 'class' in cell)) {
             return { style: cell.style, class: cell.class };
         }
         return {};
    };

    return {
      sortColumn,
      sortDirection,
      sortedRows,
      toggleSort,
      getCellDisplayValue,
      getCellAttributes,
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
            <td v-for="(cell, cIndex) in row" :key="cIndex" v-bind="getCellAttributes(cell)">
              {{ getCellDisplayValue(cell) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `
});

// --- Similarity Calculator Component ---

const SimilarityCalculator = defineComponent({
  components: { SortableTable },
  setup() {
    const vectorA = ref("1, 2, 3, 4, 5");
    const vectorB = ref("5, 4, 3, 2, 1");
    const error = ref<string | null>(null);
    const results = ref<any[]>([]);
    const headers = ['Function', 'Result'];

    const parseVector = (input: string) => {
      const cleaned = input.trim();
      if (!cleaned) return [];
      const parts = cleaned.split(/[\s,]+/);
      const nums = parts.map(p => parseFloat(p));
      if (nums.some(isNaN)) {
        throw new Error("Invalid number in vector input");
      }
      return nums;
    };

    const calculate = () => {
      error.value = null;
      results.value = [];

      try {
        const vecA = parseVector(vectorA.value);
        const vecB = parseVector(vectorB.value);

        if (vecA.length === 0 || vecB.length === 0) {
           error.value = "Vectors cannot be empty";
           return;
        }

        if (vecA.length !== vecB.length) {
          error.value = `Dimension mismatch: Vector A (${vecA.length}) vs Vector B (${vecB.length})`;
          return;
        }

        const similarityLib = VectorSimilarity;

        const computedResults = [];

        for (const [name, func] of Object.entries(similarityLib)) {
          if (typeof func === 'function' && func.length === 2) {
            try {
               const res = (func as any)(vecA, vecB);

               // Determine color/style based on metric type
               let style: any = {};
               // Heuristic: if name contains "Similarity" or "Correlation", higher is usually better (Green).
               // If name contains "Distance" or "Divergence", lower is usually better (Green).
               // Ranges:
               // Similarity: [0, 1] typically.
               // Correlation: [-1, 1].

               const lowerName = name.toLowerCase();
               const isDistance = lowerName.includes('distance') || lowerName.includes('divergence');
               const isSimilarity = lowerName.includes('similarity') || lowerName.includes('correlation') || lowerName.includes('coefficient');

               if (typeof res === 'number' && isFinite(res)) {
                   let color: string | null = null;
                   if (isSimilarity) {
                       // Map [-1, 1] to color? Or [0, 1]?
                       // Simple thresholding
                       if (res >= 0.8) color = COLOR_VISITED_BG; // Greenish
                       else if (res >= 0.5) color = COLOR_BACKGROUND_HOVER; // Yellowish
                       else color = COLOR_DANGER; // Reddish
                   } else if (isDistance) {
                       // Distance: 0 is best.
                       // Hard to set upper bound for "bad" without context, but let's assume < 0.5 is "good" for normalized distances,
                       // but some distances are unbounded.
                       // Let's just color 0 (identity) distinctly.
                       if (Math.abs(res) < 0.0001) color = COLOR_VISITED_BG; // Perfect match
                   }

                   if (color) {
                       style = { backgroundColor: color };
                   }
               }

               // Pass object to SortableTable
               computedResults.push([name, { value: res, style }]);
            } catch (e: any) {
               computedResults.push([name, `Error: ${e.message}`]);
            }
          }
        }

        results.value = computedResults;

      } catch (e) {
        error.value = e.message;
      }
    };

    onMounted(() => {
        calculate();
    });

    return {
      vectorA,
      vectorB,
      error,
      results,
      headers,
      calculate
    };
  },
  template: `
    <div class="calculator-container">
      <h2>Interactive Similarity Calculator</h2>
      <div class="input-group">
        <div class="input-wrapper">
          <label>Vector A (comma separated):</label>
          <textarea v-model="vectorA" placeholder="e.g. 1.0, 2.0, 3.0"></textarea>
        </div>
        <div class="input-wrapper">
          <label>Vector B (comma separated):</label>
          <textarea v-model="vectorB" placeholder="e.g. 0.5, 1.5, 2.5"></textarea>
        </div>
      </div>

      <button @click="calculate" class="calc-btn">Calculate Similarities</button>

      <div v-if="error" class="error-msg">
        {{ error }}
      </div>

      <div v-if="results.length" style="margin-top: 20px;">
         <sortable-table
            :headers="headers"
            :rows="results"
            data-testid="calculator-results"
         ></sortable-table>
      </div>
    </div>
  `
});

// --- Main App ---

const App = defineComponent({
  components: {
    ChartComponent,
    SortableTable,
    SimilarityCalculator
  },
  setup() {
    // --- Data Prep helpers ---

    const prepareTableData = (similarities: any) => {
       // Convert object { func: score } to array of arrays [[func, score]]
       return Object.entries(similarities).map(([k, v]) => [k, v]);
    };

    // --- Outliers ---
    const outlierTests = computed(() => {
      return (analysisResults as any).outliersResiliencyTest.map((test: any) => ({
        testCase: test.testCase,
        vectors: Object.keys(test)
           .filter(k => k.startsWith('vec'))
           .reduce((obj: any, k) => { obj[k] = test[k]; return obj; }, {}),
        rows: prepareTableData(test.similarities)
      }));
    });

    // --- Stress Tests ---
    const stressTests = computed(() => {
        return (analysisResults as any).stressTests.map((test: any) => ({
            testCase: test.testCase,
            vectors: Object.keys(test)
                .filter(k => k.includes('Vec'))
                .reduce((obj: any, k) => { obj[k] = test[k]; return obj; }, {}),
            rows: prepareTableData(test.similarities)
        }));
    });

    // --- Comparison ---
    const comparisonTests = computed(() => {
        const result: any = {};
        Object.entries((analysisResults as any).similarityCompare).forEach(([type, data]: [string, any]) => {
             result[type] = {
                 vectors: Object.keys(data)
                    .filter(k => k.startsWith('vec'))
                    .reduce((obj: any, k) => { obj[k] = data[k]; return obj; }, {}),
                 rows: prepareTableData(data.similarities)
             };
        });
        return result;
    });

    // --- Demo Matrix ---
    const demoMatrixData = computed(() => {
        const comparisons = (analysisResults as any).comparisonDemo.comparisons;
        const funcs = Object.keys(comparisons).sort();
        const pairs = Object.keys(comparisons[funcs[0]]).sort();

        const headers = ['Function', ...pairs];
        const rows = funcs.map(funcName => {
            const row: any[] = [funcName];
            pairs.forEach(pair => {
                row.push(comparisons[funcName][pair]);
            });
            return row;
        });

        return { headers, rows };
    });

    // --- Charts Data ---

    const vectorChartData = computed(() => {
        const vectors = (analysisResults as any).comparisonDemo.vectors;
        const colors = [COLOR_COMPARING, COLOR_DEFAULT, COLOR_SORTED, COLOR_VISITED, COLOR_HIGHLIGHT];
        const maxLength = Math.max(...Object.values(vectors).map((v: any) => v.length));
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
        plugins: { tooltip: { callbacks: { label: (ctx: any) => `${ctx.dataset.label}: ${ctx.raw}` } } },
        scales: {
            x: { title: { display: true, text: 'Index' } },
            y: { title: { display: true, text: 'Value' } }
        }
    };

    const benchmarkChartData = computed(() => {
        const data = [...(analysisResults as any).benchmark].sort((a, b) => a.avgTime - b.avgTime);
        return {
            labels: data.map(d => d.name),
            datasets: [{
                label: 'Execution Time (ms)',
                data: data.map(d => d.avgTime),
                backgroundColor: COLOR_DEFAULT,
                borderColor: COLOR_PRIMARY_DARK,
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

    // Debug visibility
    const showDebug = ref(false);

    // Parse query params on mount
    onMounted(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get('debug') === 'true') {
            showDebug.value = true;
        }
    });

    const toggleDebug = () => {
        showDebug.value = !showDebug.value;
    };

    const nonlinearInsights = computed(() => {
        return (analysisResults as any).nonLinearAnalysis ? (analysisResults as any).nonLinearAnalysis.insights : [];
    });

    // Computed options derived from data
    const availableTypes = computed(() => {
      if (!(analysisResults as any).nonLinearAnalysis) return [];
      const types = new Set((analysisResults as any).nonLinearAnalysis.detailedResults.map((item: any) => item.type));
      return Array.from(types).sort();
    });

    const availableSizes = computed(() => {
      if (!(analysisResults as any).nonLinearAnalysis) return [];
      const sizes = new Set((analysisResults as any).nonLinearAnalysis.detailedResults.map((item: any) => item.size));
      return Array.from(sizes).sort((a: any, b: any) => a - b);
    });

    const availableNoiseLevels = computed(() => {
      if (!(analysisResults as any).nonLinearAnalysis) return [];
      const levels = new Set((analysisResults as any).nonLinearAnalysis.detailedResults.map((item: any) =>
        item.noiseSettings && item.noiseSettings.level ? item.noiseSettings.level : null
      ).filter((l: any) => l !== null));
      return Array.from(levels).sort((a: any, b: any) => a - b);
    });

    const filteredNonlinearData = computed(() => {
         if (!(analysisResults as any).nonLinearAnalysis) return [];
         return (analysisResults as any).nonLinearAnalysis.detailedResults.filter((item: any) => {
            const typeMatch = filters.value.type === 'all' || item.type === filters.value.type;
            const sizeMatch = filters.value.size === 'all' || item.size.toString() === filters.value.size;
            const noiseMatch = filters.value.noise === 'all' ||
                (item.noiseSettings && item.noiseSettings.level && item.noiseSettings.level.toString() === filters.value.noise);
            return typeMatch && sizeMatch && noiseMatch;
         });
    });

    // Debug info
    const debugInfo = computed(() => {
        return {
            filters: filters.value,
            totalItems: (analysisResults as any).nonLinearAnalysis ? (analysisResults as any).nonLinearAnalysis.detailedResults.length : 0,
            filteredItems: filteredNonlinearData.value.length,
            availableTypes: availableTypes.value,
            availableSizes: availableSizes.value,
            availableNoiseLevels: availableNoiseLevels.value
        };
    });

    // Derived table data for nonlinear analysis (flat structure for sorting)
    const nonlinearTableRows = computed(() => {
        const rows: any[] = [];
        filteredNonlinearData.value.forEach((item: any) => {
            const noiseType = item.noiseSettings ? item.noiseSettings.type : 'N/A';
            const noiseLevel = item.noiseSettings ? item.noiseSettings.level : 'N/A';

            Object.entries(item.metrics).forEach(([metricName, metricData]: [string, any]) => {
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
        console.log('Filters applied:', debugInfo.value);
    };

    const nonlinearScoresData = computed(() => {
        const data = filteredNonlinearData.value;
        const labels = data.map((item: any) => item.label);
        const similarityFunctions = [
            'normalizedCosineSimilarity', 'pearsonCorrelationSimilarity', 'euclideanSimilarity',
            'polynomialKernelSimilarity', 'rbfKernelSimilarity',
            'vectorSimilarityMeanStdPowerArithmeticMean',
            'vectorSimilarityMeanStdPowerArithmeticMeanNoStd',
            'vectorSimilarityCorrelation',
            'vectorSimilarityCorrelationNoStd',
            'vectorSimilarityItakuraSaito'
        ];
        const colors = [COLOR_DEFAULT, COLOR_COMPARING, COLOR_SORTED, COLOR_HIGHLIGHT, COLOR_VISITED, COLOR_SUCCESS, COLOR_TEXT_MUTED, COLOR_VISITED, COLOR_ACTIVE, COLOR_TEXT_DARK];

        const datasets = similarityFunctions.map((funcName, index) => ({
            label: funcName.replace(/([A-Z])/g, ' $1').trim(),
            data: data.map((item: any) => item.metrics[funcName] ? item.metrics[funcName].score : null),
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
        const performanceData: any = {};

        data.forEach((item: any) => {
            if (!performanceData[item.type]) performanceData[item.type] = {};
            Object.entries(item.metrics).forEach(([func, metrics]: [string, any]) => {
                if (!performanceData[item.type][func]) performanceData[item.type][func] = [];
                performanceData[item.type][func].push(metrics.timeMs);
            });
        });

        const functionTypes = Object.keys(performanceData);
        const similarityFunctions = [
            'normalizedCosineSimilarity', 'pearsonCorrelationSimilarity', 'euclideanSimilarity',
            'polynomialKernelSimilarity', 'rbfKernelSimilarity',
            'vectorSimilarityMeanStdPowerArithmeticMean',
            'vectorSimilarityMeanStdPowerArithmeticMeanNoStd',
            'vectorSimilarityCorrelation',
            'vectorSimilarityCorrelationNoStd',
            'vectorSimilarityItakuraSaito'
        ];
        const colors = [COLOR_DEFAULT, COLOR_COMPARING, COLOR_SORTED, COLOR_HIGHLIGHT, COLOR_VISITED, COLOR_SUCCESS, COLOR_TEXT_MUTED, COLOR_VISITED, COLOR_ACTIVE, COLOR_TEXT_DARK];

        const datasets = similarityFunctions.map((funcName, index) => ({
            label: funcName.replace(/([A-Z])/g, ' $1').trim(),
            data: functionTypes.map(type => {
                const times = performanceData[type][funcName];
                if (!times) return 0;
                return times.reduce((a: any, b: any) => a + b, 0) / times.length;
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
        applyFilters,
        availableTypes,
        availableSizes,
        availableNoiseLevels,
        debugInfo,
        showDebug,
        toggleDebug
    };
  }
});

createApp(App).mount('#app');
