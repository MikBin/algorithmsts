import { describe, expect, it } from 'vitest';
import { LinkedList } from '../../src/linkedList/linkedList';

describe('LinkedList', () => {
    it('should be empty initially', () => {
        const list = new LinkedList<number>();
        expect(list.isEmpty()).toBe(true);
        expect(list.size()).toBe(0);
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
        expect(list.size()).toBe(2);
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
        const arr = [...list];
        expect(arr).toEqual([1, 2]);
    });

    it('should create a list from an array', () => {
        const list = LinkedList.fromArray([1, 2, 3]);
        expect(list.toArray()).toEqual([1, 2, 3]);
        expect(list.size()).toBe(3);
    });

    it('should clear the list', () => {
        const list = LinkedList.fromArray([1, 2, 3]);
        list.clear();
        expect(list.isEmpty()).toBe(true);
        expect(list.size()).toBe(0);
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