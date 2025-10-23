import { describe, expect, it } from 'vitest';
import { LinkedList } from '../../../src/data-structures/linked-list';
import { LinkedListIterator } from '../../../src/data-structures/linked-list/iterator';
import { ICollection } from '../../../src/core/interfaces/ICollection';
import { IDataStructure } from '../../../src/core/interfaces/IDataStructure';
import { IIterator } from '../../../src/core/interfaces/IIterator';

describe('LinkedList', () => {
    it('should be empty initially', () => {
        const list = new LinkedList<number>();
        expect(list.isEmpty()).toBe(true);
        expect(list.size).toBe(0);
    });

    it('should return null when peeking or popping from an empty list', () => {
        const list = new LinkedList<number>();
        expect(list.first()).toBeNull();
        expect(list.last()).toBeNull();
        expect(list.pop()).toBeNull();
        expect(list.shift()).toBeNull();
    });

    it('should add elements to the end of the list', () => {
        const list = new LinkedList<number>();
        list.add(1);
        list.add(2);
        expect(list.size).toBe(2);
        expect(list.last()).toBe(2);
    });

    it('should convert to an array', () => {
        const list = new LinkedList<number>();
        list.add(1);
        list.add(2);
        expect(list.toArray()).toEqual([1, 2]);
    });

    it('should be iterable', () => {
        const list = new LinkedList<number>();
        list.add(1);
        list.add(2);
        const iterator = list.iterator();
        const arr: number[] = [];
        while (iterator.hasNext()) {
            arr.push(iterator.next());
        }
        expect(arr).toEqual([1, 2]);
    });

    it('should create a list from an array', () => {
        const list = LinkedList.fromArray([1, 2, 3]);
        expect(list.toArray()).toEqual([1, 2, 3]);
        expect(list.size).toBe(3);
    });

    it('should clear the list', () => {
        const list = LinkedList.fromArray([1, 2, 3]);
        list.clear();
        expect(list.isEmpty()).toBe(true);
        expect(list.size).toBe(0);
        expect(list.toArray()).toEqual([]);
    });

    describe('insertAt', () => {
        it('should insert at the beginning', () => {
            const list = LinkedList.fromArray([2, 3]);
            list.insertAt(0, 1);
            expect(list.toArray()).toEqual([1, 2, 3]);
            expect(list.first()).toBe(1);
        });

        it('should insert at the end', () => {
            const list = LinkedList.fromArray([1, 2]);
            list.insertAt(2, 3);
            expect(list.toArray()).toEqual([1, 2, 3]);
            expect(list.last()).toBe(3);
        });

        it('should insert in the middle', () => {
            const list = LinkedList.fromArray([1, 3]);
            list.insertAt(1, 2);
            expect(list.toArray()).toEqual([1, 2, 3]);
        });

        it('should not insert out of bounds', () => {
            const list = new LinkedList<number>();
            expect(list.insertAt(-1, 0)).toBe(false);
            expect(list.insertAt(1, 0)).toBe(false);
        });

        describe('iterator functionality', () => {
            it('should implement IIterator interface correctly', () => {
                const list = LinkedList.fromArray([1, 2, 3]);
                const iterator = list.iterator();

                expect(iterator.hasNext()).toBe(true);
                expect(iterator.next()).toBe(1);
                expect(iterator.hasNext()).toBe(true);
                expect(iterator.next()).toBe(2);
                expect(iterator.hasNext()).toBe(true);
                expect(iterator.next()).toBe(3);
                expect(iterator.hasNext()).toBe(false);
            });

            it('should throw error when next() called on empty iterator', () => {
                const list = new LinkedList<number>();
                const iterator = list.iterator();

                expect(iterator.hasNext()).toBe(false);
                expect(() => iterator.next()).toThrow('No more elements in the iteration');
            });

            it('should support current() method', () => {
                const list = LinkedList.fromArray([1, 2, 3]);
                const iterator = list.iterator();

                iterator.next(); // Move to first element
                expect(iterator.current()).toBe(1);
                iterator.next(); // Move to second element
                expect(iterator.current()).toBe(2);
            });

            it('should throw error when current() called before next()', () => {
                const list = LinkedList.fromArray([1, 2, 3]);
                const iterator = list.iterator();

                expect(() => iterator.current()).toThrow('No current element in the iteration');
            });
        });

        describe('interface compliance', () => {
            it('should implement ICollection interface', () => {
                const list = new LinkedList<number>();
                const collection: ICollection<number> = list;

                expect(collection.isEmpty()).toBe(true);
                expect(collection.size).toBe(0);

                list.add(1);
                expect(collection.isEmpty()).toBe(false);
                expect(collection.size).toBe(1);

                collection.clear();
                expect(collection.isEmpty()).toBe(true);
            });

            it('should implement IDataStructure interface', () => {
                const list = new LinkedList<number>();
                const dataStructure: IDataStructure<number> = list;

                list.add(1);
                list.add(2);

                expect(dataStructure.contains(1)).toBe(true);
                expect(dataStructure.contains(3)).toBe(false);
                expect(dataStructure.toArray()).toEqual([1, 2]);

                const iterator = dataStructure.iterator();
                expect(iterator.hasNext()).toBe(true);
                expect(iterator.next()).toBe(1);
            });
        });
    });

    describe('getAt', () => {
        it('should get the correct element', () => {
            const list = LinkedList.fromArray([1, 2, 3]);
            expect(list.getAt(1)).toBe(2);
        });

        it('should return null for out-of-bounds index', () => {
            const list = new LinkedList<number>();
            expect(list.getAt(0)).toBeNull();
        });
    });

    describe('removeAt', () => {
        it('should remove from the beginning', () => {
            const list = LinkedList.fromArray([1, 2, 3]);
            expect(list.removeAt(0)).toBe(1);
            expect(list.toArray()).toEqual([2, 3]);
        });

        it('should remove from the end', () => {
            const list = LinkedList.fromArray([1, 2, 3]);
            expect(list.removeAt(2)).toBe(3);
            expect(list.toArray()).toEqual([1, 2]);
        });

        it('should remove from the middle', () => {
            const list = LinkedList.fromArray([1, 2, 3]);
            expect(list.removeAt(1)).toBe(2);
            expect(list.toArray()).toEqual([1, 3]);
        });

        it('should return null for out-of-bounds index', () => {
            const list = new LinkedList<number>();
            expect(list.removeAt(0)).toBeNull();
        });
    });

    describe('remove', () => {
        it('should remove the first occurrence of a value', () => {
            const list = LinkedList.fromArray([1, 2, 1]);
            expect(list.remove(1)).toBe(1);
            expect(list.toArray()).toEqual([2, 1]);
        });

        it('should return null if the value is not found', () => {
            const list = LinkedList.fromArray([1, 2, 3]);
            expect(list.remove(4)).toBeNull();
        });
    });
});
