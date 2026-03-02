function* countingSortGenerator(originalArray, maxVal) {
    let array = [...originalArray];
    const n = array.length;
    
    // Step 1: Create count array
    let countArray = Array(maxVal + 1).fill(0);
    yield { type: 'init', array: [...array], countArray: [...countArray], phase: 'Counting elements' };
    
    // Step 2: Count occurrences
    for (let i = 0; i < n; i++) {
        countArray[array[i]]++;
        yield { type: 'count', array: [...array], countArray: [...countArray], index: i, phase: `Counted element ${array[i]}` };
    }
    
    // Step 3: Calculate cumulative counts
    for (let i = 1; i <= maxVal; i++) {
        countArray[i] += countArray[i - 1];
        yield { type: 'cumulative', array: [...array], countArray: [...countArray], phase: `Cumulative count at index ${i}` };
    }
    
    // Step 4: Build output array
    let output = Array(n);
    for (let i = n - 1; i >= 0; i--) {
        let val = array[i];
        output[countArray[val] - 1] = val;
        countArray[val]--;
        yield { type: 'place', array: [...output], countArray: [...countArray], index: i, phase: `Placed ${val}` };
    }
    
    yield { type: 'done', array: output, countArray: [...countArray], phase: 'Complete' };
}

class CountingSortVisualizer {
    constructor() {
        this.array = [];
        this.generator = null;
        this.isRunning = false;
        this.isPaused = false;
        this.timer = null;
        this.speed = 500;
        
        this.mainArrayContainer = document.getElementById('main-array-container');
        this.countArrayContainer = document.getElementById('count-array-container');
        this.arraySizeInput = document.getElementById('array-size');
        this.maxValueInput = document.getElementById('max-value');
        this.speedInput = document.getElementById('speed');
        this.btnGenerate = document.getElementById('btn-generate');
        this.btnStart = document.getElementById('btn-start');
        this.btnPause = document.getElementById('btn-pause');
        this.btnReset = document.getElementById('btn-reset');
        this.statusText = document.getElementById('status-text');
        this.phaseText = document.getElementById('phase-text');

        this.btnGenerate.addEventListener('click', () => this.generateArray());
        this.btnStart.addEventListener('click', () => this.start());
        this.btnPause.addEventListener('click', () => this.togglePause());
        this.btnReset.addEventListener('click', () => this.reset());
        this.speedInput.addEventListener('input', (e) => {
            this.speed = 2010 - parseInt(e.target.value);
        });

        this.generateArray();
    }

    generateArray() {
        this.stop();
        const size = parseInt(this.arraySizeInput.value, 10);
        const max = parseInt(this.maxValueInput.value, 10);
        this.array = Array.from({length: size}, () => Math.floor(Math.random() * (max + 1)));
        this.maxVal = max;
        this.renderArray(this.array);
        this.renderCountArray([]);
        this.statusText.textContent = 'Ready';
        this.phaseText.textContent = '-';
        this.btnStart.disabled = false;
        this.btnPause.disabled = true;
    }

    renderArray(arr, isDone = false) {
        this.mainArrayContainer.innerHTML = '';
        arr.forEach((val, i) => {
            const el = document.createElement('div');
            el.className = 'array-element';
            if (isDone) el.classList.add('sorted');
            el.textContent = val;
            this.mainArrayContainer.appendChild(el);
        });
    }

    renderCountArray(countArray) {
        this.countArrayContainer.innerHTML = '';
        if (countArray.length === 0) return;
        
        const container = document.createElement('div');
        container.className = 'count-array';
        
        for (let i = 0; i < countArray.length; i++) {
            const item = document.createElement('div');
            item.className = 'count-item';
            item.innerHTML = `<span class="count-index">${i}</span><span class="count-value">${countArray[i]}</span>`;
            container.appendChild(item);
        }
        
        this.countArrayContainer.appendChild(container);
    }

    stop() {
        this.isRunning = false;
        this.isPaused = false;
        clearTimeout(this.timer);
        this.btnPause.textContent = 'Pause';
    }

    reset() {
        this.stop();
        this.generateArray();
    }

    togglePause() {
        if (!this.isRunning) return;
        if (this.isPaused) {
            this.isPaused = false;
            this.btnPause.textContent = 'Pause';
            this.statusText.textContent = 'Sorting...';
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

        this.generator = countingSortGenerator([...this.array], this.maxVal);
        this.isRunning = true;
        this.btnStart.disabled = true;
        this.btnPause.disabled = false;
        this.statusText.textContent = 'Sorting...';
        this.step();
    }

    step() {
        if (!this.isRunning || this.isPaused) return;

        let res = this.generator.next();
        
        if (res.done) {
            this.finishSort();
            return;
        }
        
        const value = res.value;

        if (value.type === 'done') {
            this.finishSort(value.array);
            return;
        }

        this.phaseText.textContent = value.phase;
        this.renderArray(value.array, value.type === 'done');
        this.renderCountArray(value.countArray);

        this.timer = setTimeout(() => this.step(), this.speed);
    }
    
    finishSort(finalArray) {
        this.isRunning = false;
        this.btnStart.disabled = false;
        this.btnPause.disabled = true;
        this.statusText.textContent = 'Completed';
        this.renderArray(finalArray || this.array, true);
        this.phaseText.textContent = 'Complete';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CountingSortVisualizer();
});
