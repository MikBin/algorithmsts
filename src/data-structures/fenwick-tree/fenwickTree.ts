
import { IFenwickTree } from './interfaces';

export class FenwickTree implements IFenwickTree {
    private readonly _tree: number[];
    private readonly _size: number;

    constructor(size: number);
    constructor(values: number[]);
    constructor(sizeOrValues: number | number[]) {
        if (typeof sizeOrValues === 'number') {
            this._size = sizeOrValues;
            this._tree = new Array(this._size + 1).fill(0);
        } else {
            this._size = sizeOrValues.length;
            this._tree = new Array(this._size + 1).fill(0);
            this.build(sizeOrValues);
        }
    }

    build(values: number[]): void {
        for (let i = 0; i < this._size; i++) {
            this.update(i, values[i]);
        }
    }

    update(index: number, delta: number): void {
        if (index < 0 || index >= this._size) {
            throw new Error('Index out of bounds');
        }
        let i = index + 1;
        while (i <= this._size) {
            this._tree[i] += delta;
            i += this.lsb(i);
        }
    }

    set(index: number, value: number): void {
        if (index < 0 || index >= this._size) {
            throw new Error('Index out of bounds');
        }
        const currentValue = this.query(index) - this.query(index - 1);
        const delta = value - currentValue;
        this.update(index, delta);
    }

    query(index: number): number {
        if (index < -1 || index >= this._size) {
            throw new Error('Index out of bounds');
        }
        let sum = 0;
        let i = index + 1;
        while (i > 0) {
            sum += this._tree[i];
            i -= this.lsb(i);
        }
        return sum;
    }

    rangeQuery(left: number, right: number): number {
        if (left < 0 || right < 0 || left >= this._size || right >= this._size || left > right) {
            throw new Error('Invalid range');
        }
        return this.query(right) - this.query(left - 1);
    }

    findKth(k: number): number {
        let index = 0;
        let bitMask = 1;
        while ((bitMask << 1) <= this._size) {
            bitMask <<= 1;
        }

        while (bitMask > 0) {
            const nextIndex = index + bitMask;
            if (nextIndex <= this._size && this._tree[nextIndex] < k) {
                k -= this._tree[nextIndex];
                index = nextIndex;
            }
            bitMask >>= 1;
        }
        return index;
    }

    findPrefixSum(target: number): number {
        let index = 0;
        let bitMask = 1;
        while ((bitMask << 1) <= this._size) {
            bitMask <<= 1;
        }

        while (bitMask > 0) {
            const nextIndex = index + bitMask;
            if (nextIndex <= this._size && this._tree[nextIndex] < target) {
                target -= this._tree[nextIndex];
                index = nextIndex;
            }
            bitMask >>= 1;
        }
        return index;
    }


    get size(): number {
        return this._size;
    }

    isEmpty(): boolean {
        return this._size === 0;
    }

    clear(): void {
        this._tree.fill(0);
    }

    clone(): FenwickTree {
        const newTree = new FenwickTree(this._size);
        for(let i = 0; i < this._tree.length; i++) {
            newTree._tree[i] = this._tree[i];
        }
        return newTree;
    }

    private lsb(index: number): number {
        return index & -index;
    }

    toJson(): string {
        return JSON.stringify(this._tree);
    }
}
