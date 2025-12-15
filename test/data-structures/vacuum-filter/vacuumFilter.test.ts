import { describe, it, expect } from 'vitest';
import { VacuumFilter } from '../../../src/data-structures/vacuum-filter/vacuumFilter';

describe('VacuumFilter', () => {
  it('should add and check items correctly', () => {
    const filter = new VacuumFilter<string>(100, 16);
    expect(filter.add('hello')).toBe(true);
    expect(filter.add('world')).toBe(true);

    expect(filter.mightContain('hello')).toBe(true);
    expect(filter.mightContain('world')).toBe(true);
    expect(filter.mightContain('foo')).toBe(false);
  });

  it('should handle deletion', () => {
    const filter = new VacuumFilter<string>(100, 16);
    filter.add('test');
    expect(filter.mightContain('test')).toBe(true);

    expect(filter.delete('test')).toBe(true);
    expect(filter.mightContain('test')).toBe(false);
    expect(filter.delete('test')).toBe(false); // Already deleted
  });

  it('should handle serialization', () => {
    const filter = new VacuumFilter<string>(100, 16);
    filter.add('A');
    filter.add('B');

    const json = filter.toJson();
    const loaded = VacuumFilter.fromJson<string>(json);

    expect(loaded.mightContain('A')).toBe(true);
    expect(loaded.mightContain('B')).toBe(true);
    expect(loaded.mightContain('C')).toBe(false);
    expect(loaded.size()).toBe(2);
  });

  it('should support different fingerprint sizes', () => {
    const f8 = new VacuumFilter(100, 8);
    f8.add('8bit');
    expect(f8.mightContain('8bit')).toBe(true);

    const f32 = new VacuumFilter(100, 32);
    f32.add('32bit');
    expect(f32.mightContain('32bit')).toBe(true);
  });

  it('should support custom objects with serializer', () => {
    interface User { id: number; name: string; }
    const filter = new VacuumFilter<User>(10, 16, {
      serializer: (u) => `${u.id}:${u.name}`
    });

    const u1 = { id: 1, name: 'Alice' };
    const u2 = { id: 2, name: 'Bob' };

    filter.add(u1);
    expect(filter.mightContain(u1)).toBe(true);
    expect(filter.mightContain(u2)).toBe(false);
  });
});
