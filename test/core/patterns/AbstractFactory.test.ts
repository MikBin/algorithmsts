import { describe, it, expect } from 'vitest';
import { ListFactory, TreeFactory, FactoryCreator } from '../../../src/core/patterns/AbstractFactory';
import { ArgumentError } from '../../../src/core/validation/ArgumentError';

describe('AbstractFactory', () => {
  describe('ListFactory', () => {
    it('throws ArgumentError on createDataStructure', () => {
      const factory = new ListFactory<number>();
      expect(() => factory.createDataStructure()).toThrow(ArgumentError);
    });

    it('throws ArgumentError on createAlgorithm', () => {
      const factory = new ListFactory<number>();
      expect(() => factory.createAlgorithm()).toThrow(ArgumentError);
    });
  });

  describe('TreeFactory', () => {
    it('throws ArgumentError on createDataStructure', () => {
      const factory = new TreeFactory<number>();
      expect(() => factory.createDataStructure()).toThrow(ArgumentError);
    });

    it('throws ArgumentError on createAlgorithm', () => {
      const factory = new TreeFactory<number>();
      expect(() => factory.createAlgorithm()).toThrow(ArgumentError);
    });
  });

  describe('FactoryCreator', () => {
    it('creates ListFactory for "list" type', () => {
      const factory = FactoryCreator.createFactory<number>('list');
      expect(factory).toBeInstanceOf(ListFactory);
    });

    it('creates TreeFactory for "tree" type', () => {
      const factory = FactoryCreator.createFactory<number>('tree');
      expect(factory).toBeInstanceOf(TreeFactory);
    });

    it('throws ArgumentError for unknown types', () => {
      // @ts-expect-error Testing invalid input throws ArgumentError
      expect(() => FactoryCreator.createFactory<number>('unknown')).toThrow(ArgumentError);
    });
  });
});
