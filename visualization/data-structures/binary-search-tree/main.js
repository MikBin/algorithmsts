import * as d3 from 'd3';
import { BinarySearchTree } from '../../../src/data-structures/binary-search-tree/index.ts';
import { TreeVisualizer } from '../../assets/common.js';
import { AnimationController, PlaybackControls } from '../../assets/animation-controller.js';

const tree = new BinarySearchTree();
const visualizer = new TreeVisualizer('#tree-container');
const animController = new AnimationController();
const controls = new PlaybackControls('#playback-controls-container', animController);

// Convert BST to Hierarchy for TreeVisualizer
function convertToHierarchy(node, idCounter = { val: 0 }) {
  if (!node) return null;

  const hierarchyNode = {
    value: node.value,
    id: idCounter.val++,
    children: []
  };

  if (node.left) {
    hierarchyNode.children.push(convertToHierarchy(node.left, idCounter));
  } else if (node.right) {
      // Dummy to force right child to right side if using simple tree logic
      // But TreeVisualizer is generic.
      // For proper BST visualization, we should push null/dummy?
      // TreeVisualizer logic doesn't support null children explicitly for layout.
      // But let's just push existing children.
  }

  // Re-eval: existing simple push logic
  if (node.right) {
    hierarchyNode.children.push(convertToHierarchy(node.right, idCounter));
  }

  return hierarchyNode;
}

function update(highlightId = null, processingId = null) {
    // Access root.
    const root = tree.root;
    const hierarchy = convertToHierarchy(root);
    visualizer.update(hierarchy);

    // Additional highlighting logic if TreeVisualizer exposes nodes (we use d3 selection if available)
    // If not, we might need a custom approach or assume TreeVisualizer creates g.node elements with node values/ids
    d3.selectAll('.node circle').attr('class', '');

    // We can highlight by finding nodes with specific values if we map them
    if (processingId !== null) {
        d3.selectAll('.node').filter(d => {
            const val = d && d.data ? d.data.value : (d ? d.value : null);
            return val === processingId;
        }).classed('processing', true);
    }
    if (highlightId !== null) {
        d3.selectAll('.node').filter(d => {
            const val = d && d.data ? d.data.value : (d ? d.value : null);
            return val === highlightId;
        }).classed('highlighted', true);
    }
}

d3.select('#add-node').on('click', () => {
  const value = d3.select('#node-value').property('value');
  if (value && !isNaN(value)) {
    const valInt = parseInt(value, 10);
    animController.clearSteps();

    animController.addStep(`Preparing to insert ${valInt}`, () => {
        update();
    });

    // Simulate insertion process
    let current = tree.root;
    if (!current) {
        animController.addStep(`Tree is empty. Inserting ${valInt} as root.`, () => {
            tree.insert(valInt);
            update(valInt);
        });
    } else {
        let inserted = false;
        while (current && !inserted) {
            const comparison = tree.compare(valInt, current.value);
            const currentNodeValue = current.value; // capture for closure

            animController.addStep(`Comparing ${valInt} with ${currentNodeValue}`, () => {
                update(null, currentNodeValue);
            });

            if (comparison < 0) {
                if (current.left === null) {
                    animController.addStep(`${valInt} is less than ${currentNodeValue}. Left child is empty. Inserting ${valInt}.`, () => {
                        tree.insert(valInt);
                        update(valInt);
                    });
                    inserted = true;
                } else {
                    animController.addStep(`${valInt} is less than ${currentNodeValue}. Moving to left child.`, () => {
                        update(null, currentNodeValue);
                    });
                    current = current.left;
                }
            } else if (comparison > 0) {
                if (current.right === null) {
                    animController.addStep(`${valInt} is greater than ${currentNodeValue}. Right child is empty. Inserting ${valInt}.`, () => {
                        tree.insert(valInt);
                        update(valInt);
                    });
                    inserted = true;
                } else {
                    animController.addStep(`${valInt} is greater than ${currentNodeValue}. Moving to right child.`, () => {
                        update(null, currentNodeValue);
                    });
                    current = current.right;
                }
            } else {
                animController.addStep(`Value ${valInt} already exists in the tree.`, () => {
                    update(currentNodeValue);
                });
                inserted = true;
            }
        }
    }

    animController.addStep(`Insertion complete`, () => {
        update();
    });

    animController.play();
  }
});

d3.select('#remove-node').on('click', () => {
  const value = d3.select('#node-value').property('value');
  if (value && !isNaN(value)) {
    const valInt = parseInt(value, 10);
    animController.clearSteps();

    animController.addStep(`Preparing to remove ${valInt}`, () => {
        update();
    });

    // Simulate searching for node to delete
    let current = tree.root;
    let found = false;
    while (current && !found) {
        const comparison = tree.compare(valInt, current.value);
        const currentNodeValue = current.value;

        animController.addStep(`Comparing ${valInt} with ${currentNodeValue}`, () => {
            update(null, currentNodeValue);
        });

        if (comparison === 0) {
            animController.addStep(`Found node ${valInt} to delete.`, () => {
                update(currentNodeValue);
            });
            found = true;

            // Simplified delete animation step
            animController.addStep(`Removing node ${valInt} and rebalancing tree if necessary.`, () => {
                tree.remove(valInt);
                update();
            });

        } else if (comparison < 0) {
            current = current.left;
            if (current) {
                animController.addStep(`${valInt} is less than ${currentNodeValue}. Moving to left child.`, () => {
                    update(null, currentNodeValue);
                });
            }
        } else {
            current = current.right;
            if (current) {
                animController.addStep(`${valInt} is greater than ${currentNodeValue}. Moving to right child.`, () => {
                    update(null, currentNodeValue);
                });
            }
        }
    }

    if (!found) {
        animController.addStep(`Value ${valInt} not found in the tree.`, () => {
            update();
        });
    } else {
         animController.addStep(`Removal complete`, () => {
            update();
        });
    }

    animController.play();
  }
});
