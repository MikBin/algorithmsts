import { Node } from './interfaces';

export class LinkedList<T> {
    private head: Node<T> | null;
    private tail: Node<T> | null;
    private count: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    /**
     * @returns {number} The number of elements in the list.
     * @complexity O(1)
     */
    size(): number {
        return this.count;
    }

    /**
     * Adds an item to the end of the list.
     * @param {T} value The value to add.
     * @complexity O(1)
     */
    add(value: T) {
        const node: Node<T> = { value, next: null, prev: null };
        if (!this.head) {
            this.head = node;
        }
        if (this.tail) {
            this.tail.next = node;
            node.prev = this.tail;
        }
        this.tail = node;
        this.count++;
    }

    /**
     * Deletes the first item from the list.
     * @returns {T | null} The deleted item, or null if the list is empty.
     * @complexity O(1)
     */
    shift(): T | null {
        if (this.head) {
            const value = this.head.value;
            this.head = this.head.next;
            if (!this.head) {
                this.tail = null;
            } else {
                this.head.prev = null;
            }
            this.count--;
            return value;
        }
        return null;
    }

    /**
     * @returns {T | null} The first item in the list, or null if the list is empty.
     * @complexity O(1)
     */
    first(): T | null {
        return this.head ? this.head.value : null;
    }

    /**
     * @returns {T | null} The last item in the list, or null if the list is empty.
     * @complexity O(1)
     */
    last(): T | null {
        return this.tail ? this.tail.value : null;
    }

    /**
     * Deletes the last element from the list.
     * @returns {T | null} The deleted item, or null if the list is empty.
     * @complexity O(1)
     */
    pop(): T | null {
        if (this.tail) {
            const value = this.tail.value;
            this.tail = this.tail.prev;
            if (!this.tail) {
                this.head = null;
            } else {
                this.tail.next = null;
            }
            this.count--;
            return value;
        }
        return null;
    }

    /**
     * Inserts a value at a specific index.
     * @param {number} index The index to insert at.
     * @param {T} value The value to insert.
     * @returns {boolean} True if the insertion was successful, false otherwise.
     * @complexity O(n)
     */
    insertAt(index: number, value: T): boolean {
        if (index < 0 || index > this.count) {
            return false;
        }
        if (index === this.count) {
            this.add(value);
            return true;
        }
        if (index === 0) {
            const node: Node<T> = { value, next: this.head, prev: null };
            if (this.head) {
                this.head.prev = node;
            }
            this.head = node;
            this.count++;
            return true;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current!.next;
        }
        const node: Node<T> = { value, next: current, prev: current!.prev };
        current!.prev!.next = node;
        current!.prev = node;
        this.count++;
        return true;
    }

    /**
     * Retrieves the value at a specific index.
     * @param {number} index The index to retrieve.
     * @returns {T | null} The value at the index, or null if the index is out of bounds.
     * @complexity O(n)
     */
    getAt(index: number): T | null {
        if (index < 0 || index >= this.count) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current!.next;
        }
        return current ? current.value : null;
    }

    /**
     * Removes the item at a specific index.
     * @param {number} index The index to remove.
     * @returns {T | null} The removed value, or null if the index is out of bounds.
     * @complexity O(n)
     */
    removeAt(index: number): T | null {
        if (index < 0 || index >= this.count) {
            return null;
        }
        if (index === 0) {
            return this.shift();
        }
        if (index === this.count - 1) {
            return this.pop();
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current!.next;
        }
        if (current) {
            if (current.prev) {
                current.prev.next = current.next;
            }
            if (current.next) {
                current.next.prev = current.prev;
            }
            this.count--;
            return current.value;
        }
        return null;
    }

    /**
     * Removes the first occurrence of a value from the list.
     * @param {T} value The value to remove.
     * @returns {T | null} The removed value, or null if the value is not found.
     * @complexity O(n)
     */
    remove(value: T): T | null {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) {
                return this.removeAt(index);
            }
            current = current.next;
            index++;
        }
        return null;
    }

    /**
     * Clears the list.
     * @complexity O(1)
     */
    clear() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    /**
     * Creates a LinkedList from an array.
     * @param {T[]} arr The source array.
     * @returns {LinkedList<T>} A new LinkedList.
     * @complexity O(n)
     */
    static fromArray<T>(arr: T[]): LinkedList<T> {
        const list = new LinkedList<T>();
        for (const item of arr) {
            list.add(item);
        }
        return list;
    }

    /**
     * @returns {Iterator<T>} An iterator for the values of the LinkedList.
     */
    [Symbol.iterator](): Iterator<T> {
        let current = this.head;
        return {
            next: () => {
                if (current) {
                    const value = current.value;
                    current = current.next;
                    return { value, done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }

    /**
     * @returns {T[]} An array representation of the list.
     * @complexity O(n)
     */
    toArray(): Array<T> {
        const arr = new Array<T>(this.count);
        let current = this.head;
        let i = 0;
        while (current) {
            arr[i++] = current.value;
            current = current.next;
        }
        return arr;
    }

    /**
     * @returns {boolean} True if the list is empty, false otherwise.
     * @complexity O(1)
     */
    isEmpty(): boolean {
        return this.count === 0;
    }
}