import { BarChartVisualizer } from '../../assets/common.js';

// --- Algorithm Implementations (Generators) ---

function* bubbleSort(array) {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      yield { type: 'compare', indices: [j, j + 1], array: [...array] };
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        yield { type: 'swap', indices: [j, j + 1], array: [...array] };
      }
    }
    yield { type: 'sorted', indices: [n - 1 - i], array: [...array] }; // Last element sorted
  }
  yield { type: 'sorted', indices: [0], array: [...array] };
}

function* quickSort(array, low = 0, high = array.length - 1) {
  if (low < high) {
    const pi = yield* partition(array, low, high);
    yield* quickSort(array, low, pi - 1);
    yield* quickSort(array, pi + 1, high);
  } else if (low === high) {
      // Mark as sorted if single element range
      yield { type: 'sorted', indices: [low], array: [...array] };
  }
}

function* partition(array, low, high) {
  const pivot = array[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    yield { type: 'compare', indices: [j, high], array: [...array] }; // Compare with pivot
    if (array[j] < pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
      yield { type: 'swap', indices: [i, j], array: [...array] };
    }
  }
  [array[i + 1], array[high]] = [array[high], array[i + 1]];
  yield { type: 'swap', indices: [i + 1, high], array: [...array] };

  // Pivot is now at i+1 and sorted
  yield { type: 'sorted', indices: [i + 1], array: [...array] };

  return i + 1;
}

function* mergeSort(array, start = 0, end = array.length - 1) {
    if (start >= end) {
        return;
    }

    const mid = Math.floor((start + end) / 2);
    yield* mergeSort(array, start, mid);
    yield* mergeSort(array, mid + 1, end);
    yield* merge(array, start, mid, end);
}

function* merge(array, start, mid, end) {
    let left = array.slice(start, mid + 1);
    let right = array.slice(mid + 1, end + 1);

    let i = 0, j = 0, k = start;

    while (i < left.length && j < right.length) {
        yield { type: 'compare', indices: [start + i, mid + 1 + j], array: [...array] };

        // For visualization, we overwrite the main array as we merge
        // This is slightly different from standard merge sort but shows the effect
        if (left[i] <= right[j]) {
            array[k] = left[i];
            yield { type: 'swap', indices: [k], array: [...array] }; // Highlight update
            i++;
        } else {
            array[k] = right[j];
            yield { type: 'swap', indices: [k], array: [...array] };
            j++;
        }
        k++;
    }

    while (i < left.length) {
        array[k] = left[i];
        yield { type: 'swap', indices: [k], array: [...array] };
        i++;
        k++;
    }

    while (j < right.length) {
        array[k] = right[j];
        yield { type: 'swap', indices: [k], array: [...array] };
        j++;
        k++;
    }

    // Mark range as partially sorted/touched
    // yield { type: 'sorted', indices: [], array: [...array] };
}

function* heapSort(array) {
    let n = array.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        yield* heapify(array, n, i);
    }

    // Extract elements
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        [array[0], array[i]] = [array[i], array[0]];
        yield { type: 'swap', indices: [0, i], array: [...array] };
        yield { type: 'sorted', indices: [i], array: [...array] };

        // Call max heapify on the reduced heap
        yield* heapify(array, i, 0);
    }
    yield { type: 'sorted', indices: [0], array: [...array] };
}

function* heapify(array, n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n) {
        yield { type: 'compare', indices: [l, largest], array: [...array] };
        if (array[l] > array[largest]) {
            largest = l;
        }
    }

    if (r < n) {
        yield { type: 'compare', indices: [r, largest], array: [...array] };
        if (array[r] > array[largest]) {
            largest = r;
        }
    }

    if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]];
        yield { type: 'swap', indices: [i, largest], array: [...array] };
        yield* heapify(array, n, largest);
    }
}

function* countingSort(array) {
    // For visualization, assume non-negative integers
    let max = Math.max(...array);
    let min = Math.min(...array);
    let range = max - min + 1;
    let count = new Array(range).fill(0);
    let output = new Array(array.length).fill(0);

    for (let i = 0; i < array.length; i++) {
        yield { type: 'compare', indices: [i], array: [...array] }; // Visualizing scan
        count[array[i] - min]++;
    }

    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    for (let i = array.length - 1; i >= 0; i--) {
        output[count[array[i] - min] - 1] = array[i];
        count[array[i] - min]--;

        // This is tricky to visualize in-place with a single array view
        // We will just show the overwrite happening
    }

    // Copy back to array for visualization
    for (let i = 0; i < array.length; i++) {
        array[i] = output[i];
        yield { type: 'swap', indices: [i], array: [...array] };
    }
}

function* radixSort(array) {
    const max = Math.max(...array);

    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        yield* countingSortForRadix(array, exp);
    }
}

function* countingSortForRadix(array, exp) {
    let output = new Array(array.length).fill(0);
    let count = new Array(10).fill(0);

    for (let i = 0; i < array.length; i++) {
        yield { type: 'compare', indices: [i], array: [...array] };
        count[Math.floor(array[i] / exp) % 10]++;
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (let i = array.length - 1; i >= 0; i--) {
        output[count[Math.floor(array[i] / exp) % 10] - 1] = array[i];
        count[Math.floor(array[i] / exp) % 10]--;
    }

    for (let i = 0; i < array.length; i++) {
        array[i] = output[i];
        yield { type: 'swap', indices: [i], array: [...array] };
    }
}


// --- Controller ---

class SortingController {
    constructor() {
        this.visualizer = new BarChartVisualizer('#viz-container');
        this.array = [];
        this.generator = null;
        this.isRunning = false;
        this.isPaused = false;
        this.timer = null;
        this.delay = 50;
        this.comparisons = 0;
        this.swaps = 0;
        this.sortedIndices = new Set();

        // Bind UI
        this.btnGenerate = document.getElementById('btn-generate');
        this.btnStart = document.getElementById('btn-start');
        this.btnPause = document.getElementById('btn-pause');
        this.btnReset = document.getElementById('btn-reset');
        this.algoSelect = document.getElementById('algo-select');
        this.arraySizeInput = document.getElementById('array-size');
        this.speedInput = document.getElementById('speed');

        this.btnGenerate.addEventListener('click', () => this.generateArray());
        this.btnStart.addEventListener('click', () => this.start());
        this.btnPause.addEventListener('click', () => this.togglePause());
        this.btnReset.addEventListener('click', () => this.reset());
        this.arraySizeInput.addEventListener('input', (e) => {
            document.getElementById('array-size-display').textContent = e.target.value;
            this.generateArray();
        });
        this.speedInput.addEventListener('input', (e) => {
            // Map 1-100 to 500-1 ms
            this.delay = 505 - e.target.value * 5;
        });

        // Initialize
        this.generateArray();
    }

    generateArray() {
        this.stop();
        const size = parseInt(this.arraySizeInput.value, 10);
        this.array = Array.from({length: size}, () => Math.floor(Math.random() * 100) + 1);
        this.resetStats();
        this.visualizer.update(this.array);
        document.getElementById('status-text').textContent = 'Ready';
        this.btnStart.disabled = false;
        this.btnPause.disabled = true;
    }

    resetStats() {
        this.comparisons = 0;
        this.swaps = 0;
        this.sortedIndices.clear();
        this.updateStats();
    }

    updateStats() {
        document.getElementById('comparisons-count').textContent = this.comparisons;
        document.getElementById('swaps-count').textContent = this.swaps;
    }

    reset() {
        this.stop();
        this.generateArray(); // Or reset to initial state if stored
    }

    stop() {
        this.isRunning = false;
        this.isPaused = false;
        clearTimeout(this.timer);
        this.btnPause.textContent = 'Pause';
    }

    togglePause() {
        if (!this.isRunning) return;

        if (this.isPaused) {
            this.isPaused = false;
            this.btnPause.textContent = 'Pause';
            this.step();
        } else {
            this.isPaused = true;
            this.btnPause.textContent = 'Resume';
            document.getElementById('status-text').textContent = 'Paused';
        }
    }

    start() {
        if (this.isRunning && !this.isPaused) return;
        if (this.isPaused) {
            this.togglePause();
            return;
        }

        const algo = this.algoSelect.value;
        const strategies = {
            'quickSort': quickSort,
            'mergeSort': mergeSort,
            'heapSort': heapSort,
            'radixSort': radixSort,
            'countingSort': countingSort
        };

        this.generator = strategies[algo](this.array);
        this.isRunning = true;
        this.btnStart.disabled = true;
        this.btnPause.disabled = false;
        document.getElementById('status-text').textContent = 'Sorting...';

        this.step();
    }

    step() {
        if (!this.isRunning || this.isPaused) return;

        const { value, done } = this.generator.next();

        if (done) {
            this.isRunning = false;
            this.btnStart.disabled = false;
            this.btnPause.disabled = true;
            document.getElementById('status-text').textContent = 'Completed';
            // Mark all as sorted
            this.visualizer.update(this.array, { sorted: this.array.map((_, i) => i) });
            return;
        }

        if (value.type === 'compare') {
            this.comparisons++;
            this.visualizer.update(value.array, {
                compare: value.indices,
                sorted: Array.from(this.sortedIndices)
            });
        } else if (value.type === 'swap') {
            this.swaps++;
            this.visualizer.update(value.array, {
                swap: value.indices,
                sorted: Array.from(this.sortedIndices)
            });
        } else if (value.type === 'sorted') {
            value.indices.forEach(i => this.sortedIndices.add(i));
            this.visualizer.update(value.array, {
                sorted: Array.from(this.sortedIndices)
            });
        }

        this.updateStats();
        this.timer = setTimeout(() => this.step(), this.delay);
    }
}

// Start
new SortingController();
