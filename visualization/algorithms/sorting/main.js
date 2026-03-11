import { BarChartVisualizer } from '../../assets/common.js';
import { AnimationController, PlaybackControls } from '../../assets/animation-controller.js';

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
        this.comparisons = 0;
        this.swaps = 0;
        this.sortedIndices = new Set();
        this.initialArray = [];

        this.animationController = new AnimationController();
        this.playbackControls = new PlaybackControls('#playback-container', this.animationController);

        // Bind UI
        this.btnGenerate = document.getElementById('btn-generate');
        this.algoSelect = document.getElementById('algo-select');
        this.arraySizeInput = document.getElementById('array-size');

        this.btnGenerate.addEventListener('click', () => this.generateArray());
        this.arraySizeInput.addEventListener('input', (e) => {
            document.getElementById('array-size-display').textContent = e.target.value;
            this.generateArray();
        });

        this.algoSelect.addEventListener('change', () => {
            this.animationController.clearSteps();
        });

        // Initialize
        this.generateArray();

        // Hook up play event to build steps if needed
        const originalPlay = this.animationController.play.bind(this.animationController);
        this.animationController.play = () => {
            if (this.animationController.steps.length === 0) {
                this.prepareSteps();
            }
            originalPlay();
        };

        const originalReset = this.animationController.reset.bind(this.animationController);
        this.animationController.reset = () => {
            originalReset();
            this.resetStats();
            this.array = [...this.initialArray];
            this.visualizer.update(this.array);
            document.getElementById('status-text').textContent = 'Ready';
        };
    }

    generateArray() {
        this.animationController.clearSteps();
        const size = parseInt(this.arraySizeInput.value, 10);
        this.array = Array.from({length: size}, () => Math.floor(Math.random() * 100) + 1);
        this.initialArray = [...this.array];
        this.resetStats();
        this.visualizer.update(this.array);
        document.getElementById('status-text').textContent = 'Ready';
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

    prepareSteps() {
        const algo = this.algoSelect.value;
        const strategies = {
            'quickSort': quickSort,
            'mergeSort': mergeSort,
            'heapSort': heapSort,
            'radixSort': radixSort,
            'countingSort': countingSort
        };

        document.getElementById('status-text').textContent = 'Sorting...';

        // Use a copy of the initial array for generating steps
        const generatorArray = [...this.initialArray];
        const generator = strategies[algo](generatorArray);
        this.animationController.clearSteps();

        let result = generator.next();
        while (!result.done) {
            const value = result.value;

            let description = '';
            if (value.type === 'compare') {
                description = `Comparing indices ${value.indices.join(', ')}`;
                this.comparisons++;
            } else if (value.type === 'swap') {
                description = `Swapping indices ${value.indices.join(', ')}`;
                this.swaps++;
            } else if (value.type === 'sorted') {
                description = `Sorted indices ${value.indices.join(', ')}`;
                value.indices.forEach(i => this.sortedIndices.add(i));
            }

            // Snapshot the state at this point in the generator execution
            const snapshotArray = [...value.array];
            const snapshotIndices = [...value.indices];
            const snapshotType = value.type;
            const snapshotComparisons = this.comparisons;
            const snapshotSwaps = this.swaps;
            const snapshotSorted = Array.from(this.sortedIndices);

            this.animationController.addStep(description, () => {
                if (snapshotType === 'compare') {
                    this.visualizer.update(snapshotArray, {
                        compare: snapshotIndices,
                        sorted: snapshotSorted
                    });
                } else if (snapshotType === 'swap') {
                    this.visualizer.update(snapshotArray, {
                        swap: snapshotIndices,
                        sorted: snapshotSorted
                    });
                } else if (snapshotType === 'sorted') {
                    this.visualizer.update(snapshotArray, {
                        sorted: snapshotSorted
                    });
                }
                document.getElementById('comparisons-count').textContent = snapshotComparisons;
                document.getElementById('swaps-count').textContent = snapshotSwaps;
            });

            result = generator.next();
        }

        const finalArray = [...generatorArray];
        this.animationController.addStep('Completed', () => {
            document.getElementById('status-text').textContent = 'Completed';
            this.visualizer.update(finalArray, { sorted: finalArray.map((_, i) => i) });
        });
    }
}

// Start
new SortingController();
