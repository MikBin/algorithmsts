/**
 * A Monotonic Stack data structure that maintains elements in a monotonic order.
 * Uses an underlying array. Pushing elements pops those that violate the monotonicity,
 * ensuring the top always contains the extremum based on the provided comparator.
 */
export class MonotonicStack<T> {
  private data: T[] = [];

  /**
   * Creates a new Monotonic Stack.
   *
   * @param compare - Comparator function to define the monotonic property.
   * @complexity Time: O(1) | Space: O(1)
   */
  constructor(private compare: (a: T, b: T) => number) {}

  /**
   * Pushes a new element onto the stack.
   * Pops elements from the top of the stack that violate the monotonic property
   * when compared to the new element.
   *
   * @param x - The element to push.
   * @complexity Time: O(n), amortized O(1) | Space: O(1) (array capacity growth)
   */
  push(x: T): void { while (this.data.length && this.compare(this.data[this.data.length-1], x) > 0) this.data.pop(); this.data.push(x); }

  /**
   * Pops the top element from the stack.
   *
   * @returns The popped element, or undefined if the stack is empty.
   * @complexity Time: O(1) | Space: O(1)
   */
  pop(): T | undefined { return this.data.pop(); }

  /**
   * Returns the top element of the stack without removing it.
   *
   * @returns The top element, or undefined if the stack is empty.
   * @complexity Time: O(1) | Space: O(1)
   */
  top(): T | undefined { return this.data[this.data.length-1]; }

  /**
   * Checks if the stack is empty.
   *
   * @returns True if the stack is empty, false otherwise.
   * @complexity Time: O(1) | Space: O(1)
   */
  isEmpty(): boolean { return this.data.length===0; }

  /**
   * Returns a copy of the elements currently in the stack as an array.
   *
   * @returns A new array containing the stack elements.
   * @complexity Time: O(n) | Space: O(n) (copy allocation)
   */
  toArray(): T[] { return [...this.data]; }

  /**
   * Serializes the stack to a JSON string.
   *
   * @returns A JSON string representation of the stack.
   * @complexity Time: O(n) | Space: O(n) (JSON string allocation)
   */
  toJson(): string {
    return JSON.stringify(this.data);
  }
}
