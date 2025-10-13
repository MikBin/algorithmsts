import { binaryComparisonRoutine } from '../interfaces';

/**
 * @internal
 * Determines whether to advance to the next level in a skip list.
 * @param P - The probability of returning true.
 * @returns A boolean indicating whether to advance.
 */
const flipCoin = (P: number = 0.5): boolean => Math.random() < P;

/**
 * @internal
 * Generates a random level for a new node in the skip list.
 * @param maxLevel - The maximum level allowed in the skip list.
 * @returns A random level for the new node.
 */
const getLevel = (maxLevel: number): number => {
  let level: number = 1;
  while (flipCoin() && level < maxLevel) {
    level++;
  }
  return level;
};

/**
 * @internal
 * The default comparison function for skip list values.
 * @param x - The first value.
 * @param y - The second value.
 * @returns 1 if x > y, -1 if x < y, and 0 if x === y.
 */
const defaultComparisonFn: binaryComparisonRoutine<any> = (x, y) => {
  if (x > y) return 1;
  if (x < y) return -1;
  return 0;
};

/**
 * Represents a node in the skip list.
 */
class SkipNode<T> {
  /**
   * An array of pointers to the next node at each level.
   */
  public pointers: (SkipNode<T> | undefined)[];
  /**
   * The value of the node.
   */
  public value: T;
  /**
   * A counter for the number of times this value has been inserted.
   */
  public count: number;

  /**
   * Creates a new SkipNode.
   * @param level - The level of the node.
   * @param val - The value of the node.
   * @param isRoot - Whether the node is the root of the skip list.
   */
  constructor(protected level: number, val: T, isRoot: boolean = false) {
    this.value = val;
    this.count = isRoot ? 0 : 1;
    this.pointers = Array<SkipNode<T>>(level + 1);
  }

  /**
   * Increments the count of the node.
   */
  increment(): void {
    this.count++;
  }
}

/**
 * A skip list is a probabilistic data structure that allows for fast search, insertion, and deletion operations.
 */
class SkipList<T> {
  /**
   * The head node of the skip list.
   */
  private head: SkipNode<T>;
  /**
   * An array of nodes to update during insertion and deletion.
   */
  private updateNodes: SkipNode<T>[];
  /**
   * The number of unique elements in the skip list.
   */
  public size: number;
  /**
   * The maximum level of the skip list.
   */
  private maxLevel: number;

  /**
   * Creates a new SkipList.
   * @param maxLevel - The maximum level of the skip list.
   * @param dummyRootVal - The value for the dummy root node.
   * @param comparisonFn - The function to use to compare values.
   */
  constructor(
    maxLevel: number,
    dummyRootVal: T,
    private comparisonFn: binaryComparisonRoutine<T> = defaultComparisonFn,
  ) {
    this.maxLevel = maxLevel;
    this.head = new SkipNode<T>(this.maxLevel, dummyRootVal, true);
    this.updateNodes = Array<SkipNode<T>>(this.maxLevel + 1);
    this.size = 0;
  }

  /**
   * Inserts a value into the skip list.
   * If the value already exists, its count is incremented.
   * @param val - The value to insert.
   */
  insert(val: T): void {
    let currentNode = this.head;

    // Find the position to insert the new node
    for (let i = this.maxLevel; i >= 1; i--) {
      while (currentNode.pointers[i] && this.comparisonFn(currentNode.pointers[i]!.value, val) < 0) {
        currentNode = currentNode.pointers[i]!;
      }
      this.updateNodes[i] = currentNode;
    }

    currentNode = currentNode.pointers[1]!;

    // If the node already exists, increment its counter
    if (currentNode && this.comparisonFn(currentNode.value, val) === 0) {
      currentNode.increment();
    } else {
      // Otherwise, create a new node and insert it
      const newLevel = getLevel(this.maxLevel);
      const newNode = new SkipNode<T>(newLevel, val);
      for (let i = 1; i <= newLevel; i++) {
        newNode.pointers[i] = this.updateNodes[i].pointers[i];
        this.updateNodes[i].pointers[i] = newNode;
      }
      this.size++;
    }
  }

  /**
   * Removes a value from the skip list.
   * @param val - The value to remove.
   */
  remove(val: T): void {
    let currentNode = this.head;

    // Find the node to remove
    for (let i = this.maxLevel; i >= 1; i--) {
      while (currentNode.pointers[i] && this.comparisonFn(currentNode.pointers[i]!.value, val) < 0) {
        currentNode = currentNode.pointers[i]!;
      }
      this.updateNodes[i] = currentNode;
    }

    currentNode = currentNode.pointers[1]!;

    // If the node is found, remove it
    if (currentNode && this.comparisonFn(currentNode.value, val) === 0) {
      for (let i = 1; i <= this.maxLevel; i++) {
        if (this.updateNodes[i].pointers[i] === currentNode) {
          this.updateNodes[i].pointers[i] = currentNode.pointers[i];
        }
      }
      this.size--;
    }
  }

  /**
   * Finds a value in the skip list.
   * @param val - The value to find.
   * @returns The node containing the value, or null if the value is not found.
   */
  find(val: T): SkipNode<T> | null {
    let currentNode = this.head;

    // Search for the node
    for (let i = this.maxLevel; i >= 1; i--) {
      while (currentNode.pointers[i] && this.comparisonFn(currentNode.pointers[i]!.value, val) < 0) {
        currentNode = currentNode.pointers[i]!;
      }
    }

    currentNode = currentNode.pointers[1]!;

    if (currentNode && this.comparisonFn(currentNode.value, val) === 0) {
      return currentNode;
    }

    return null;
  }

  /**
   * Converts the skip list to an array.
   * @returns An array of the values in the skip list.
   */
  toArray(): T[] {
    const result: T[] = [];
    let currentNode = this.head.pointers[1];
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.pointers[1];
    }
    return result;
  }
}

export default SkipList;
