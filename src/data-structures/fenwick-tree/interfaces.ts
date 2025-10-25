
export interface IFenwickTree {
    readonly size: number;
    build(values: number[]): void;
    update(index: number, delta: number): void;
    set(index: number, value: number): void;
    query(index: number): number;
    rangeQuery(left: number, right: number): number;
    findKth(k: number): number;
    findPrefixSum(target: number): number;
    isEmpty(): boolean;
    clear(): void;
    clone(): IFenwickTree;
}
