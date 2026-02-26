import { describe, it, expect } from 'vitest';
import { Node, Edge, GraphRepresentation } from '../../src/types';

describe('Types Module', () => {
  it('should export Node type', () => {
    // Type-only test, checking compilation basically.
    const node: Node<number> = { value: 1 };
    expect(node.value).toBe(1);
  });

  it('should export Edge type', () => {
    const edge: Edge<number> = { source: 1, target: 2 };
    expect(edge.source).toBe(1);
    expect(edge.target).toBe(2);
  });

  it('should export GraphRepresentation type', () => {
     const graphRep: GraphRepresentation = 'adjacency-list';
     expect(graphRep).toBe('adjacency-list');
  });
});
