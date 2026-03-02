import * as d3 from 'd3';

// --- Visualizer Component ---
class ArrayVisualizer {
    constructor(containerSelector, options = {}) {
        this.containerSelector = containerSelector;
        this.margin = options.margin || { top: 20, right: 10, bottom: 20, left: 10 };
        this.height = options.height || 80;
        this.barWidth = options.barWidth || 30;
        this.padding = options.padding || 5;
        this.svg = null;
        this.data = [];
        this.init();
    }

    init() {
        d3.select(this.containerSelector).select("svg").remove();
        this.svg = d3.select(this.containerSelector)
            .append("svg")
            .attr("height", this.height);
    }

    update(data, activeIndices = {}, stateColors = {}) {
        this.data = data;
        const totalWidth = this.data.length * (this.barWidth + this.padding) + this.margin.left + this.margin.right;

        this.svg.attr("width", Math.max(totalWidth, d3.select(this.containerSelector).node().getBoundingClientRect().width));

        const g = this.svg.selectAll("g")
            .data(this.data);

        const gEnter = g.enter().append("g")
            .attr("transform", (d, i) => `translate(${this.margin.left + i * (this.barWidth + this.padding)}, ${this.margin.top})`);

        gEnter.append("rect")
            .attr("class", "bar")
            .attr("width", this.barWidth)
            .attr("height", 30)
            .attr("rx", 4)
            .attr("ry", 4)
            .style("fill", "#69b3a2"); // Default

        gEnter.append("text")
            .attr("class", "bar-text")
            .attr("x", this.barWidth / 2)
            .attr("y", 20)
            .text(d => d === null ? '' : d);

        gEnter.append("text")
            .attr("class", "index-text")
            .attr("x", this.barWidth / 2)
            .attr("y", -5)
            .text((d, i) => i);

        const gMerge = gEnter.merge(g);

        // Update data values
        gMerge.select(".bar-text")
            .text(d => d === null ? '' : d);

        // Apply coloring logic based on active states
        gMerge.select(".rect, .bar")
            .style("fill", (d, i) => {
                // If this specific index has a defined state color, use it
                for (const [state, indices] of Object.entries(activeIndices)) {
                    if (indices && indices.includes(i)) {
                        return stateColors[state] || "#ff9800";
                    }
                }
                return "#69b3a2"; // Default fallback
            });

        // Exit
        g.exit().remove();
    }
}

// --- Counting Sort Generator ---
function* countingSortGenerator(array, maxVal) {
    const n = array.length;
    let count = new Array(maxVal + 1).fill(0);
    let output = new Array(n).fill(null);

    // 1. Initialize count array
    yield {
        phase: 'Initializing count array',
        input: [...array], count: [...count], cumulative: null, output: [...output],
        active: { countInit: Array.from({length: count.length}, (_, i) => i) }
    };

    // 2. Count frequencies
    for (let i = 0; i < n; i++) {
        const val = array[i];
        count[val]++;
        yield {
            phase: `Counting elements: Found ${val}`,
            input: [...array], count: [...count], cumulative: null, output: [...output],
            active: { inputScan: [i], countUpdate: [val] }
        };
    }

    let cumulative = [...count];

    // 3. Compute cumulative sum
    yield {
        phase: 'Computing cumulative counts',
        input: [...array], count: [...count], cumulative: [...cumulative], output: [...output],
        active: { cumulativeInit: Array.from({length: cumulative.length}, (_, i) => i) }
    };

    for (let i = 1; i <= maxVal; i++) {
        cumulative[i] += cumulative[i - 1];
        yield {
            phase: `Cumulative sum at index ${i}: ${cumulative[i-1]} + ${count[i]} = ${cumulative[i]}`,
            input: [...array], count: [...count], cumulative: [...cumulative], output: [...output],
            active: { cumulativeCalc: [i, i-1] }
        };
    }

    // 4. Place elements in output array (stable sort requires backwards traversal)
    let finalCumulative = [...cumulative]; // For display consistency during placement

    for (let i = n - 1; i >= 0; i--) {
        const val = array[i];
        const outputIndex = cumulative[val] - 1;
        output[outputIndex] = val;
        cumulative[val]--; // Decrement for next duplicate

        yield {
            phase: `Placing ${val} at output index ${outputIndex}`,
            input: [...array], count: [...count], cumulative: [...cumulative], output: [...output],
            active: { inputScan: [i], cumulativeLookup: [val], outputPlace: [outputIndex] }
        };
    }

    // 5. Done
    yield {
        phase: 'Sorted!',
        input: [...array], count: [...count], cumulative: [...finalCumulative], output: [...output],
        active: { sorted: Array.from({length: n}, (_, i) => i) },
        done: true
    };
}


// --- Controller ---
class CountingSortController {
    constructor() {
        this.inputVisualizer = new ArrayVisualizer('#input-array-container', { barWidth: 40 });
        this.countVisualizer = new ArrayVisualizer('#count-array-container', { barWidth: 35 });
        this.cumulativeVisualizer = new ArrayVisualizer('#cumulative-array-container', { barWidth: 35 });
        this.outputVisualizer = new ArrayVisualizer('#output-array-container', { barWidth: 40 });

        this.array = [];
        this.maxVal = 20;
        this.generator = null;
        this.isRunning = false;
        this.isPaused = false;
        this.timer = null;
        this.delay = 500;

        // Colors mapping for visualization states
        this.colors = {
            countInit: '#9e9e9e',
            inputScan: '#ff9800',    // Orange
            countUpdate: '#4caf50',  // Green
            cumulativeInit: '#9e9e9e',
            cumulativeCalc: '#2196f3', // Blue
            cumulativeLookup: '#e91e63', // Pink
            outputPlace: '#9c27b0',   // Purple
            sorted: '#8bc34a'        // Light green
        };

        this.bindUI();
        this.generateArray();
    }

    bindUI() {
        this.btnGenerate = document.getElementById('btn-generate');
        this.btnStart = document.getElementById('btn-start');
        this.btnPause = document.getElementById('btn-pause');
        this.btnReset = document.getElementById('btn-reset');

        this.sizeInput = document.getElementById('array-size');
        this.maxValInput = document.getElementById('max-value');
        this.speedInput = document.getElementById('speed');

        this.statusText = document.getElementById('status-text');
        this.phaseText = document.getElementById('phase-text');

        this.btnGenerate.addEventListener('click', () => this.generateArray());
        this.btnStart.addEventListener('click', () => this.start());
        this.btnPause.addEventListener('click', () => this.togglePause());
        this.btnReset.addEventListener('click', () => {
            this.stop();
            this.updateVisualization({
                input: this.array,
                count: new Array(this.maxVal + 1).fill(null),
                cumulative: new Array(this.maxVal + 1).fill(null),
                output: new Array(this.array.length).fill(null),
                active: {}
            });
            this.statusText.textContent = 'Ready';
            this.phaseText.textContent = '';
        });

        this.sizeInput.addEventListener('input', (e) => {
            document.getElementById('array-size-display').textContent = e.target.value;
            this.generateArray();
        });

        this.maxValInput.addEventListener('input', (e) => {
            document.getElementById('max-value-display').textContent = e.target.value;
            this.generateArray();
        });

        this.speedInput.addEventListener('input', (e) => {
            // Map 1-100 to 1500-50 ms
            this.delay = 1550 - e.target.value * 15;
        });
    }

    generateArray() {
        this.stop();
        const size = parseInt(this.sizeInput.value, 10);
        this.maxVal = parseInt(this.maxValInput.value, 10);

        this.array = Array.from({length: size}, () => Math.floor(Math.random() * (this.maxVal + 1)));

        this.updateVisualization({
            input: this.array,
            count: new Array(this.maxVal + 1).fill(null),
            cumulative: new Array(this.maxVal + 1).fill(null),
            output: new Array(size).fill(null),
            active: {}
        });

        this.statusText.textContent = 'Ready';
        this.phaseText.textContent = '';
        this.btnStart.disabled = false;
        this.btnPause.disabled = true;
    }

    updateVisualization(state) {
        // Map active states to visualizers
        const inputActive = {};
        if (state.active.inputScan) inputActive.inputScan = state.active.inputScan;

        const countActive = {};
        if (state.active.countInit) countActive.countInit = state.active.countInit;
        if (state.active.countUpdate) countActive.countUpdate = state.active.countUpdate;

        const cumulativeActive = {};
        if (state.active.cumulativeInit) cumulativeActive.cumulativeInit = state.active.cumulativeInit;
        if (state.active.cumulativeCalc) cumulativeActive.cumulativeCalc = state.active.cumulativeCalc;
        if (state.active.cumulativeLookup) cumulativeActive.cumulativeLookup = state.active.cumulativeLookup;

        const outputActive = {};
        if (state.active.outputPlace) outputActive.outputPlace = state.active.outputPlace;
        if (state.active.sorted) outputActive.sorted = state.active.sorted;

        this.inputVisualizer.update(state.input, inputActive, this.colors);

        // Hide/Show cumulative array conditionally
        if (state.cumulative) {
            d3.select('#cumulative-array-container').style('display', 'block');
            this.cumulativeVisualizer.update(state.cumulative, cumulativeActive, this.colors);
        } else {
            // Initialize with empty array if not present yet
            this.cumulativeVisualizer.update(new Array(this.maxVal + 1).fill(null));
        }

        this.countVisualizer.update(state.count, countActive, this.colors);
        this.outputVisualizer.update(state.output, outputActive, this.colors);
    }

    stop() {
        this.isRunning = false;
        this.isPaused = false;
        clearTimeout(this.timer);
        this.btnPause.textContent = 'Pause';
        this.btnStart.disabled = false;
        this.btnPause.disabled = true;
    }

    togglePause() {
        if (!this.isRunning) return;

        if (this.isPaused) {
            this.isPaused = false;
            this.btnPause.textContent = 'Pause';
            this.statusText.textContent = 'Running';
            this.step();
        } else {
            this.isPaused = true;
            this.btnPause.textContent = 'Resume';
            this.statusText.textContent = 'Paused';
        }
    }

    start() {
        if (this.isRunning && !this.isPaused) return;

        if (this.isPaused) {
            this.togglePause();
            return;
        }

        this.generator = countingSortGenerator(this.array, this.maxVal);
        this.isRunning = true;

        this.btnStart.disabled = true;
        this.btnPause.disabled = false;
        this.statusText.textContent = 'Running';

        this.step();
    }

    step() {
        if (!this.isRunning || this.isPaused) return;

        const { value, done } = this.generator.next();

        if (done || value?.done) {
            this.isRunning = false;
            this.btnStart.disabled = false;
            this.btnPause.disabled = true;
            this.statusText.textContent = 'Completed';
            if (value) {
                this.phaseText.textContent = value.phase;
                this.updateVisualization(value);
                // After completion, map the output back to original array visually
                this.array = [...value.output];
            }
            return;
        }

        this.phaseText.textContent = value.phase;
        this.updateVisualization(value);

        this.timer = setTimeout(() => this.step(), this.delay);
    }
}

// Start
document.addEventListener('DOMContentLoaded', () => {
    new CountingSortController();
});
