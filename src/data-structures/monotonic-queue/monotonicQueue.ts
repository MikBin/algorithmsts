/**
 * A Monotonic Queue data structure that maintains elements in a monotonic order.
 * Uses an underlying array. Pushing elements removes those that violate the monotonicity,
 * ensuring the front always contains the extremum based on the provided comparator.
 */
export class MonotonicQueue<T> {
  private data: T[] = [];

  /**
   * Creates a new Monotonic Queue.
   *
   * @param compare - Comparator function to define the monotonic property.
   * @complexity Time: O(1) | Space: O(1)
   */
  constructor(private compare: (a: T, b: T) => number) {}

  /**
   * Pushes a new element into the queue.
   * Removes elements from the back of the queue that violate the monotonic property
   * when compared to the new element.
   *
   * @param x - The element to push.
   * @complexity Time: O(n), amortized O(1) | Space: O(1) (array capacity growth)
   */
  push(x: T): void { while (this.data.length && this.compare(this.data[this.data.length-1], x) > 0) this.data.pop(); this.data.push(x); }

  /**
   * Pops an element from the front of the queue if it matches the specified value.
   *
   * @param x - The value to match and pop.
   * @complexity Time: O(n) (array shift) | Space: O(1)
   */
  pop(x: T): void { if (this.data.length && this.compare(this.data[0], x) === 0) this.data.shift(); }

  /**
   * Returns the element at the front of the queue without removing it.
   *
   * @returns The front element, or undefined if the queue is empty.
   * @complexity Time: O(1) | Space: O(1)
   */
  front(): T | undefined { return this.data[0]; }

  /**
   * Returns the current number of elements in the queue.
   *
   * @returns The size of the queue.
   * @complexity Time: O(1) | Space: O(1)
   */
  size(): number { return this.data.length; }

  /**
   * Returns a copy of the elements currently in the queue as an array.
   *
   * @returns A new array containing the queue elements.
   * @complexity Time: O(n) | Space: O(n) (copy allocation)
   */
  toArray(): T[] { return [...this.data]; }


  /**
   * Serializes the queue to a JSON string.
   *
   * @returns A JSON string representation of the queue.
   * @complexity Time: O(n) | Space: O(n) (JSON string allocation)
   */
  toJson(): string {
    return JSON.stringify(this.data);
  }
}
