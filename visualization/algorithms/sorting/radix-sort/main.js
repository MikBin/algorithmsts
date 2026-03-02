function* radixSortGenerator(originalArray) {
    let array = [...originalArray];
    const max = Math.max(...array);
    let pass = 1;
    
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        yield { type: 'pass_start', exp, pass, array: [...array] };
        
        let buckets = Array.from({length: 10}, () => []);
        
        // Distribute to buckets
        for (let i = 0; i < array.length; i++) {
            let digit = Math.floor(array[i] / exp) % 10;
            buckets[digit].push(array[i]);
            yield { type: 'distribute', index: i, digit, exp, val: array[i], array: [...array], buckets: JSON.parse(JSON.stringify(buckets)) };
        }

        // Collect from buckets
        let k = 0;
        for (let i = 0; i < 10; i++) {
            while (buckets[i].length > 0) {
                let val = buckets[i].shift(); // Remove from front of bucket
                array[k] = val;
                yield { type: 'collect', index: k, exp, val: val, array: [...array], buckets: JSON.parse(JSON.stringify(buckets)) };
                k++;
            }
        }
        
        yield { type: 'pass_end', exp, pass, array: [...array] };
        pass++;
    }
    
    yield { type: 'done', array: [...array] };
}

class RadixSortVisualizer {
    constructor() {
        this.array = [];
        this.generator = null;
        this.isRunning = false;
        this.isPaused = false;
        this.timer = null;
        this.speed = 500;
        
        // UI Elements
        this.mainArrayContainer = document.getElementById('main-array-container');
        this.bucketsContainer = document.getElementById('buckets-container');
        this.arraySizeInput = document.getElementById('array-size');
        this.speedInput = document.getElementById('speed');
        this.btnGenerate = document.getElementById('btn-generate');
        this.btnStart = document.getElementById('btn-start');
        this.btnPause = document.getElementById('btn-pause');
        this.btnReset = document.getElementById('btn-reset');
        this.statusText = document.getElementById('status-text');
        this.currentPassText = document.getElementById('current-pass');

        // Event Listeners
        this.btnGenerate.addEventListener('click', () => this.generateArray());
        this.btnStart.addEventListener('click', () => this.start());
        this.btnPause.addEventListener('click', () => this.togglePause());
        this.btnReset.addEventListener('click', () => this.reset());
        this.speedInput.addEventListener('input', (e) => {
            // Reverse range so right = faster
            this.speed = 2010 - parseInt(e.target.value);
        });
        this.arraySizeInput.addEventListener('change', () => this.generateArray());

        // Init buckets
        this.initBuckets();
        this.generateArray();
    }
    
    initBuckets() {
        this.bucketsContainer.innerHTML = '';
        for (let i = 0; i < 10; i++) {
            const bucketDiv = document.createElement('div');
            bucketDiv.className = 'bucket';
            bucketDiv.id = `bucket-${i}`;
            
            const bucketLabel = document.createElement('div');
            bucketLabel.className = 'bucket-label';
            bucketLabel.textContent = i;
            
            const bucketItems = document.createElement('div');
            bucketItems.className = 'bucket-items';
            bucketItems.id = `bucket-items-${i}`;
            
            bucketDiv.appendChild(bucketItems);
            bucketDiv.appendChild(bucketLabel);
            this.bucketsContainer.appendChild(bucketDiv);
        }
    }

    generateArray() {
        this.stop();
        const size = parseInt(this.arraySizeInput.value, 10);
        this.array = Array.from({length: size}, () => Math.floor(Math.random() * 999) + 1); // 1-999
        this.renderArray(this.array);
        this.clearBuckets();
        this.statusText.textContent = 'Ready';
        this.currentPassText.textContent = '-';
        this.btnStart.disabled = false;
        this.btnPause.disabled = true;
    }

    renderArray(arr, highlightIndex = -1, exp = 1, isDone = false) {
        this.mainArrayContainer.innerHTML = '';
        arr.forEach((val, i) => {
            const el = document.createElement('div');
            el.className = 'array-element';
            if (i === highlightIndex) el.classList.add('highlight');
            if (isDone) el.classList.add('sorted');
            
            // Format number to highlight current digit
            let strVal = val.toString().padStart(3, '0'); // pad to 3 digits for consistent formatting
            
            if (exp > 0 && !isDone) {
                // Calculate position from right (0 = units, 1 = tens, etc.)
                let digitPos = Math.floor(Math.log10(exp));
                // Index from left in padded string
                let digitIndex = strVal.length - 1 - digitPos;
                
                if (digitIndex >= 0 && digitIndex < strVal.length) {
                    let formatted = strVal.substring(0, digitIndex) + 
                                    `<span class="digit-highlight">${strVal[digitIndex]}</span>` + 
                                    strVal.substring(digitIndex + 1);
                    el.innerHTML = formatted;
                } else {
                    el.textContent = val;
                }
            } else {
                el.textContent = val;
            }
            
            this.mainArrayContainer.appendChild(el);
        });
    }
    
    clearBuckets() {
        for(let i=0; i<10; i++) {
            const container = document.getElementById(`bucket-items-${i}`);
            if(container) container.innerHTML = '';
        }
    }

    renderBuckets(buckets) {
        this.clearBuckets();
        buckets.forEach((bucket, i) => {
            const container = document.getElementById(`bucket-items-${i}`);
            if(!container) return;
            bucket.forEach(val => {
                const item = document.createElement('div');
                item.className = 'bucket-item';
                item.textContent = val;
                container.appendChild(item);
            });
        });
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

        this.generator = radixSortGenerator([...this.array]);
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
             // Shouldn't happen if we handle {type: 'done'} properly, but just in case
            this.finishSort();
            return;
        }
        
        const value = res.value;

        if (value.type === 'done') {
            this.finishSort(value.array);
            return;
        }

        if (value.type === 'pass_start') {
             this.currentPassText.textContent = `${value.pass} (exp: ${value.exp})`;
             this.renderArray(value.array, -1, value.exp);
             this.clearBuckets();
        } else if (value.type === 'distribute') {
             this.renderArray(value.array, value.index, value.exp);
             this.renderBuckets(value.buckets);
        } else if (value.type === 'collect') {
             this.renderArray(value.array, value.index, value.exp);
             this.renderBuckets(value.buckets);
        } else if (value.type === 'pass_end') {
             this.renderArray(value.array, -1, value.exp);
             this.clearBuckets();
             // Update main array to reflect collected state for next pass
             this.array = [...value.array];
        }

        this.timer = setTimeout(() => this.step(), this.speed);
    }
    
    finishSort(finalArray) {
        this.isRunning = false;
        this.btnStart.disabled = false;
        this.btnPause.disabled = true;
        this.statusText.textContent = 'Completed';
        this.renderArray(finalArray || this.array, -1, 0, true);
        this.clearBuckets();
        this.currentPassText.textContent = 'Done';
    }
}

// Start
document.addEventListener('DOMContentLoaded', () => {
    new RadixSortVisualizer();
});
