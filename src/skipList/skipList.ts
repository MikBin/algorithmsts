import { binaryComparisonRoutine } from "../interfaces"

const flipCoin = (P: number = 0.5): boolean => Math.random() < P

const getLevel = (maxLevel: number): number => {
  let level: number = 1
  while (flipCoin() && level < maxLevel) {
    level++
  }
  return level
}

const defaultComparisonFn: binaryComparisonRoutine<any> = (x, y) => {
  if (x > y) return 1;
  else if (x < y) return -1;
  return 0;
}

class SkipNode<T> {

  private counter: number
  public pointers: SkipNode<T>[]
  public value: T
  constructor(protected level: number, val: T, isRoot: boolean = false) {
    this.value = val
    this.counter = isRoot ? 0 : 1
    this.pointers = Array<SkipNode<T>>(level + 1)
  }

  increment(): void {
    this.counter++;
  }

}

class SkipList<T> {

  private head: SkipNode<T>
  private updateNodes: SkipNode<T>[]
  private size: number

  constructor(private level: number, dummyRootVal: T, private comparisonFn: binaryComparisonRoutine<T> = defaultComparisonFn) {
    this.head = new SkipNode<T>(level, dummyRootVal, true)
    this.updateNodes = Array<SkipNode<T>>(level)
    this.level = level
    this.size = 0
  }

  insert(val: T): void {
    // Start at the head node
    let tempNode = this.head

    // Iterate through levels of the list
    for (let i = this.level; i > 0; i--) {
      while (tempNode.pointers[i] && this.comparisonFn(tempNode.pointers[i].value, val) < 0) {
        tempNode = tempNode.pointers[i]
      }
      // Update node will hold tempNode (this is the first bigger than val found) - used later for new value to insert
      //updatyeNodes[i] contains the first bigger than val for level-i or undefined? 
      this.updateNodes[i] = tempNode
    }

    // Get next element in list to compare with previous (updateNodes[i])
    tempNode = tempNode.pointers[1]

    // If temp is last in list or the value != new value, add to list
    if (tempNode && this.comparisonFn(tempNode.value, val) == 0) {
      tempNode.increment();
    } else /*if (!tempNode || this.comparisonFn(tempNode.value, val) != 0)*/ {
      const newLevel = getLevel(this.level)
      tempNode = new SkipNode<T>(newLevel, val)
      for (let i = 1; i <= newLevel; i++) {
        tempNode.pointers[i] = this.updateNodes[i].pointers[i]
        this.updateNodes[i].pointers[i] = tempNode
      }
      this.size++
    }
  }

  remove(val: T): void {
    // Start at the head node
    let tempNode = this.head

    // Iterate through levels of the list
    for (let i = this.level; i > 0; i--) {
      while (tempNode.pointers[i] && this.comparisonFn(tempNode.pointers[i].value, val) < 0) {
        tempNode = tempNode.pointers[i]
      }
      // Update node will hold tempNode - used later for new value to remove
      this.updateNodes[i] = tempNode
    }

    // Get next element in list to compare with previous (updateNodes[i])
    tempNode = tempNode.pointers[1]

    // If we found it in the list, 
    if (tempNode && this.comparisonFn(tempNode.value, val) == 0) {
      // Iterate through levels of list
      for (let i = 1; i <= this.level; i++) {
        if (this.updateNodes[i].pointers[i] == tempNode) {
          this.updateNodes[i].pointers[i] = tempNode.pointers[i]
        }
      }
      this.size--;
    }
  }

  find(val: T): any | null {
    // Start at the head node
    let tempNode = this.head

    // Iterate through levels of the list
    for (let i = this.level; i > 0; i--) {
      while (tempNode.pointers[i] && this.comparisonFn(tempNode.pointers[i].value, val) < 0) {
        tempNode = tempNode.pointers[i]
      }
    }

    // Set tempNode to the next element in the list because the current value is
    // less than whatever we are trying to find.  So the next element is either the
    // value we are looking for, or it is not in the list
    tempNode = tempNode.pointers[1]

    if (tempNode && this.comparisonFn(tempNode.value, val) == 0) {
      return tempNode
    }
  }

  toArray(start: number = 0, end: number = this.size): Array<T> {

    end = end >= this.size ? this.size - 1 : end;
    start = start < 0 ? 0 : start;
    let output: Array<T> = new Array(end - start + 1);

    let nextNode = this.head;
    let i = 0;
    while (i < start && nextNode.pointers[1]) {
      i++;
      nextNode = nextNode.pointers[1];
    }
    while (i <= end && nextNode.pointers[1]) {
      output.push(nextNode.value);
      i++;
      nextNode = nextNode.pointers[1];
    }
    return output;
  }

}

export default SkipList
