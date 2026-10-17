import { describe, it, expect } from 'vitest';
import { BaseAlgorithm } from '../../../src/core/abstracts/BaseAlgorithm';

class DummyAlgorithm extends BaseAlgorithm<number, number> {
  constructor() {
    super('Dummy Algorithm', 'O(1)', 'O(n)');
  }
  public execute(input: number): number {
    return input * 2;
  }
}

describe('BaseAlgorithm', () => {
  const algo = new DummyAlgorithm();

  it('should initialize and return correctly properties', () => {
    expect(algo.getName()).toBe('Dummy Algorithm');
    expect(algo.getTimeComplexity()).toBe('O(1)');
    expect(algo.getSpaceComplexity()).toBe('O(n)');
  });

  it('should execute successfully', () => {
    expect(algo.execute(5)).toBe(10);
  });
});
