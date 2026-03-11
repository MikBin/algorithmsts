import { computeLPSArray } from '../../../../src/algorithms/strings/pattern-matching.ts';
import { AnimationController, PlaybackControls } from '../../../assets/animation-controller.js';

// State management
let state = {
    text: '',
    pattern: '',
    algorithm: 'kmp',
    lps: [],
};

const elements = {
    textInput: document.getElementById('text-input'),
    patternInput: document.getElementById('pattern-input'),
    algoSelect: document.getElementById('algorithm-select'),
    loadBtn: document.getElementById('load-btn'),
    vizArea: document.getElementById('visualization'),
    infoPanel: document.getElementById('info-panel'),
    auxData: document.getElementById('aux-data')
};

const animationController = new AnimationController();
const playbackControls = new PlaybackControls('#playback-container', animationController);

elements.loadBtn.addEventListener('click', startVisualization);

elements.algoSelect.addEventListener('change', () => {
    animationController.clearSteps();
});

elements.textInput.addEventListener('input', () => {
    animationController.clearSteps();
});

elements.patternInput.addEventListener('input', () => {
    animationController.clearSteps();
});

const originalReset = animationController.reset.bind(animationController);
animationController.reset = () => {
    originalReset();
    elements.vizArea.innerHTML = '';
    elements.auxData.innerHTML = '';
    elements.infoPanel.innerText = 'Select an algorithm and click Load / Compute.';
    elements.textInput.disabled = false;
    elements.patternInput.disabled = false;
    elements.algoSelect.disabled = false;
    elements.loadBtn.disabled = false;
};

function startVisualization() {
    state.text = elements.textInput.value;
    state.pattern = elements.patternInput.value;
    state.algorithm = elements.algoSelect.value;

    if (!state.text || !state.pattern) {
        elements.infoPanel.innerText = 'Please enter both text and pattern.';
        return;
    }

    elements.loadBtn.disabled = true;
    elements.textInput.disabled = true;
    elements.patternInput.disabled = true;
    elements.algoSelect.disabled = true;

    animationController.clearSteps();
    renderBase();

    let computedSteps = [];

    if (state.algorithm === 'kmp') {
        computedSteps = prepareKMP();
    } else {
        computedSteps = prepareRabinKarp();
    }

    for (let i = 0; i < computedSteps.length; i++) {
        const step = computedSteps[i];
        animationController.addStep(step.message, () => renderStep(step));
    }

    if (computedSteps.length > 0) {
        animationController.play();
    } else {
        elements.infoPanel.innerText = 'No steps generated.';
    }
}

function prepareKMP() {
    state.lps = computeLPSArray(state.pattern);
    renderLPS(state.lps, state.pattern);

    // Generate steps
    let computedSteps = [];
    let i = 0; // index for text
    let j = 0; // index for pattern
    const text = state.text;
    const pattern = state.pattern;
    const lps = state.lps;

    computedSteps.push({
        type: 'info',
        message: 'Starting KMP Algorithm. LPS array computed.',
        i: 0,
        j: 0
    });

    while (i < text.length) {
        computedSteps.push({
            type: 'compare',
            message: `Comparing text[${i}] ('${text[i]}') with pattern[${j}] ('${pattern[j]}')`,
            i: i,
            j: j,
            match: text[i] === pattern[j]
        });

        if (pattern[j] === text[i]) {
            j++;
            i++;
            if (j === pattern.length) {
                computedSteps.push({
                    type: 'found',
                    message: `Pattern found at index ${i - j}!`,
                    foundIndex: i - j,
                    i: i,
                    j: j - 1 // visualizing the last match
                });
                j = lps[j - 1];
                computedSteps.push({
                    type: 'reset',
                    message: `Pattern found. Resetting j to lps[${j}] = ${lps[j]}`,
                    i: i,
                    j: j
                });
            }
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                const oldJ = j;
                j = lps[j - 1];
                computedSteps.push({
                    type: 'mismatch',
                    message: `Mismatch. j was ${oldJ}, now j = lps[${oldJ-1}] = ${j}`,
                    i: i,
                    j: j
                });
            } else {
                i++;
                computedSteps.push({
                    type: 'mismatch',
                    message: `Mismatch at start of pattern. Incrementing text index.`,
                    i: i,
                    j: j
                });
            }
        }
    }

    computedSteps.push({
        type: 'finish',
        message: 'Search completed.',
        i: i,
        j: j
    });

    return computedSteps;
}

function prepareRabinKarp() {
    let computedSteps = [];
    const text = state.text;
    const pattern = state.pattern;
    const d = 256;
    const q = 101;
    const M = pattern.length;
    const N = text.length;
    let i = 0;
    let j = 0;
    let p = 0;
    let t = 0;
    let h = 1;

    for (i = 0; i < M - 1; i++) {
        h = (h * d) % q;
    }

    // Calculate hash value of pattern and first window of text
    for (i = 0; i < M; i++) {
        p = (d * p + pattern.charCodeAt(i)) % q;
        t = (d * t + text.charCodeAt(i)) % q;
    }

    computedSteps.push({
        type: 'info',
        message: `Initial Hashes: Pattern=${p}, Text Window=${t}`,
        i: 0,
        j: 0,
        p: p,
        t: t
    });

    for (i = 0; i <= N - M; i++) {
        computedSteps.push({
            type: 'check_hash',
            message: `Checking window at ${i}. Hash T=${t}, Hash P=${p}`,
            i: i,
            j: 0,
            p: p,
            t: t,
            match: p === t
        });

        if (p === t) {
            computedSteps.push({
                type: 'info',
                message: `Hashes match! Verifying characters...`,
                i: i,
                j: 0
            });

            let match = true;
            for (j = 0; j < M; j++) {
                computedSteps.push({
                    type: 'compare',
                    message: `Comparing text[${i+j}] ('${text[i+j]}') with pattern[${j}] ('${pattern[j]}')`,
                    i: i + j,
                    j: j,
                    match: text[i+j] === pattern[j]
                });

                if (text[i + j] !== pattern[j]) {
                    match = false;
                    break;
                }
            }

            if (match) {
                 computedSteps.push({
                    type: 'found',
                    message: `Pattern found at index ${i}!`,
                    foundIndex: i,
                    i: i,
                    j: 0
                });
            }
        }

        if (i < N - M) {
            t = (d * (t - text.charCodeAt(i) * h) + text.charCodeAt(i + M)) % q;
            if (t < 0) t = (t + q);

            computedSteps.push({
                type: 'slide',
                message: `Sliding window. New Text Hash=${t}`,
                i: i + 1,
                j: 0,
                p: p,
                t: t
            });
        }
    }

    computedSteps.push({
        type: 'finish',
        message: 'Search completed.',
        i: N,
        j: 0
    });

    return computedSteps;
}

function renderBase() {
    const container = elements.vizArea;
    container.innerHTML = '';

    // Text row
    const textRow = document.createElement('div');
    textRow.className = 'row';
    const textLabel = document.createElement('div');
    textLabel.className = 'label';
    textLabel.innerText = 'Text:';
    textRow.appendChild(textLabel);

    for (let i = 0; i < state.text.length; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `text-cell-${i}`;
        cell.innerText = state.text[i];
        textRow.appendChild(cell);
    }
    container.appendChild(textRow);

    // Pattern row placeholder - will be moved dynamically or just rendered statically?
    // Better to render statically below but highlight alignment
    // For KMP, pattern moves logically. For visualization, we can show pattern below text aligning at current 'i-j'

    const patternRow = document.createElement('div');
    patternRow.className = 'row';
    patternRow.id = 'pattern-row';
    // We will populate this in renderStep
    container.appendChild(patternRow);
}

function renderLPS(lps, pattern) {
    const container = elements.auxData;
    container.innerHTML = '<h3>LPS Array</h3>';
    const display = document.createElement('div');
    display.className = 'array-display';

    for (let i = 0; i < lps.length; i++) {
        const item = document.createElement('div');
        item.className = 'array-item';

        const val = document.createElement('div');
        val.className = 'array-val';
        val.innerText = lps[i];

        const idx = document.createElement('div');
        idx.className = 'array-idx';
        idx.innerText = pattern[i];

        item.appendChild(val);
        item.appendChild(idx);
        display.appendChild(item);
    }
    container.appendChild(display);
}

function renderStep(step) {
    elements.infoPanel.innerText = step.message;

    // Clear previous highlights
    document.querySelectorAll('.cell').forEach(c => c.classList.remove('match', 'mismatch', 'current'));

    // Render Pattern Row aligned
    const patternRow = document.getElementById('pattern-row');
    patternRow.innerHTML = '';

    const label = document.createElement('div');
    label.className = 'label';
    label.innerText = 'Pattern:';
    patternRow.appendChild(label);

    // Calculate offset
    // For KMP: we are comparing text[i] and pattern[j].
    // This means the pattern starts at text index (i - j).
    let offset = step.i - step.j;
    if (step.type === 'finish') offset = 0;

    // Add spacer cells
    for (let k = 0; k < offset; k++) {
        const spacer = document.createElement('div');
        spacer.className = 'cell';
        spacer.style.visibility = 'hidden';
        patternRow.appendChild(spacer);
    }

    for (let k = 0; k < state.pattern.length; k++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `pattern-cell-${k}`;
        cell.innerText = state.pattern[k];
        patternRow.appendChild(cell);
    }

    // Highlights
    if (step.type === 'compare') {
        const textCell = document.getElementById(`text-cell-${step.i}`);
        const pattCell = document.getElementById(`pattern-cell-${step.j}`);

        if (textCell) textCell.classList.add(step.match ? 'match' : 'mismatch');
        if (pattCell) pattCell.classList.add(step.match ? 'match' : 'mismatch');
    } else if (step.type === 'found') {
        for (let k = 0; k < state.pattern.length; k++) {
             const textCell = document.getElementById(`text-cell-${step.foundIndex + k}`);
             if (textCell) textCell.classList.add('match');
        }
    } else if (step.type === 'info' || step.type === 'reset' || step.type === 'mismatch' || step.type === 'slide') {
         const textCell = document.getElementById(`text-cell-${step.i}`);
         if (textCell) textCell.classList.add('current');
    }
}
