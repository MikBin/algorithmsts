import * as d3 from 'd3';
import { BinaryHeap } from '../../../src/data-structures/binary-heap/binaryHeap.ts';
import { TreeVisualizer, arrayToTree, parseInputInteger } from '../../assets/common.js';
import { AnimationController, PlaybackControls } from '../../assets/animation-controller.js';

// Setup Heap
let isMinHeap = true;
const comparator = (a, b) => isMinHeap ? b - a : a - b;

let heap = new BinaryHeap([], comparator);
const visualizer = new TreeVisualizer('#tree-container');
const animController = new AnimationController();
const controls = new PlaybackControls('#playback-controls-container', animController);

function update(heapStateArray = null, highlightIndices = []) {
  const heapArray = heapStateArray !== null ? heapStateArray : JSON.parse(heap.toJson());

  if (heapArray.length === 0) {
    visualizer.update(null);
    return;
  }

  const root = arrayToTree(heapArray);
  visualizer.update(root);

  // Highlighting
  d3.selectAll('.node circle').attr('class', '');
  if (highlightIndices.length > 0) {
      d3.selectAll('.node').filter(d => {
          // Depending on d3 tree structure, id could be in d.data.id or d.id
          const id = d && d.data ? d.data.id : (d ? d.id : null);
          return highlightIndices.includes(id);
      }).classed('highlighted', true);
  }
}

// Controls
d3.select('#add-node').on('click', () => {
  const input = d3.select('#node-value');
  const value = parseInputInteger(input.property('value'));
  if (value !== null) {
    insertWithAnimation(value);
    input.property('value', '');
  }
});

d3.select('#poll-node').on('click', () => {
  pollWithAnimation();
});

d3.select('#random-node').on('click', () => {
  const val = Math.floor(Math.random() * 100);
  insertWithAnimation(val);
});

function insertWithAnimation(value) {
    animController.clearSteps();

    // Get current state
    const heapArray = JSON.parse(heap.toJson());

    animController.addStep(`Preparing to insert ${value}`, () => {
        update(heapArray);
    });

    // Add to end
    heapArray.push(value);
    let currentIndex = heapArray.length - 1;

    animController.addStep(`Added ${value} to the end of the heap`, () => {
        update(heapArray, [currentIndex]);
    });

    // Bubble up simulation
    let bubbled = true;
    while (currentIndex > 0 && bubbled) {
        let parentIndex = Math.floor((currentIndex - 1) / 2);

        animController.addStep(`Comparing ${heapArray[currentIndex]} with parent ${heapArray[parentIndex]}`, () => {
            update(heapArray, [currentIndex, parentIndex]);
        });

        // Use comparator (returns > 0 if first arg should be "higher" in the heap)
        // Wait, comparator = (a, b) => isMinHeap ? b - a : a - b
        // In BinaryHeap, if comparator(child, parent) > 0, we swap.
        // Let's mimic BinaryHeap logic
        const cmp = comparator(heapArray[currentIndex], heapArray[parentIndex]);

        if (cmp > 0) {
             animController.addStep(`Swapping ${heapArray[currentIndex]} and ${heapArray[parentIndex]}`, () => {
                 // Swap in array
                 const temp = heapArray[currentIndex];
                 heapArray[currentIndex] = heapArray[parentIndex];
                 heapArray[parentIndex] = temp;
                 update(heapArray, [currentIndex, parentIndex]);
             });
             currentIndex = parentIndex;
        } else {
             bubbled = false;
        }
    }

    animController.addStep(`Insertion complete`, () => {
        heap.add(value); // Actually add to real heap
        update();
    });

    animController.play();
}

function pollWithAnimation() {
    if (heap.isEmpty()) return;

    animController.clearSteps();

    const heapArray = JSON.parse(heap.toJson());
    const extractedValue = heapArray[0];

    if (heapArray.length === 1) {
        animController.addStep(`Extracting ${extractedValue}`, () => {
            update(heapArray, [0]);
        });
        animController.addStep(`Heap is now empty`, () => {
            heap.poll();
            update();
        });
        animController.play();
        return;
    }

    animController.addStep(`Extracting root ${extractedValue}`, () => {
        update(heapArray, [0]);
    });

    const lastValue = heapArray.pop();
    heapArray[0] = lastValue;

    animController.addStep(`Moved last element ${lastValue} to root`, () => {
        update(heapArray, [0]);
    });

    // Bubble down simulation
    let currentIndex = 0;
    let sinking = true;

    while (sinking) {
        let leftIndex = 2 * currentIndex + 1;
        let rightIndex = 2 * currentIndex + 2;
        let swapIndex = null;

        if (leftIndex < heapArray.length) {
            if (comparator(heapArray[leftIndex], heapArray[currentIndex]) > 0) {
                swapIndex = leftIndex;
            }
        }

        if (rightIndex < heapArray.length) {
            if (
                (swapIndex === null && comparator(heapArray[rightIndex], heapArray[currentIndex]) > 0) ||
                (swapIndex !== null && comparator(heapArray[rightIndex], heapArray[leftIndex]) > 0)
            ) {
                swapIndex = rightIndex;
            }
        }

        if (swapIndex !== null) {
            animController.addStep(`Comparing ${heapArray[currentIndex]} with children. Will swap with ${heapArray[swapIndex]}`, () => {
                const highlightIndices = [currentIndex, swapIndex];
                if (leftIndex < heapArray.length) highlightIndices.push(leftIndex);
                if (rightIndex < heapArray.length) highlightIndices.push(rightIndex);
                update(heapArray, highlightIndices);
            });

            animController.addStep(`Swapping ${heapArray[currentIndex]} and ${heapArray[swapIndex]}`, () => {
                const temp = heapArray[currentIndex];
                heapArray[currentIndex] = heapArray[swapIndex];
                heapArray[swapIndex] = temp;
                update(heapArray, [currentIndex, swapIndex]);
            });

            currentIndex = swapIndex;
        } else {
            sinking = false;
            animController.addStep(`Node ${heapArray[currentIndex]} is in correct position`, () => {
                update(heapArray, [currentIndex]);
            });
        }
    }

    animController.addStep(`Extraction complete`, () => {
        heap.poll(); // Actually poll real heap
        update();
    });

    animController.play();
}

d3.select('#clear-node').on('click', () => {
  heap.clear();
  update();
});

d3.select('#min-heap-toggle').on('change', function() {
  isMinHeap = this.checked;
  // Re-create heap with new comparator and existing items
  const currentItems = JSON.parse(heap.toJson());
  const newComparator = (a, b) => isMinHeap ? b - a : a - b;
  heap = new BinaryHeap([], newComparator);
  currentItems.forEach(i => heap.add(i));
  update();
});

// Initial draw
update();
