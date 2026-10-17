/**
 * Geometry utilities.
 * @module geometry
 * @complexity Time: O(1), Space: O(1)
 */
export type Rect = { x: number; y: number; w: number; h: number };

export function area(r: Rect): number {
  return r.w * r.h;
}

export function union(a: Rect, b: Rect): Rect {
  const x = Math.min(a.x, b.x),
    y = Math.min(a.y, b.y);
  const x2 = Math.max(a.x + a.w, b.x + b.w),
    y2 = Math.max(a.y + a.h, b.y + b.h);
  return { x, y, w: x2 - x, h: y2 - y };
}

export function enlarge(a: Rect, b: Rect): number {
  return area(union(a, b)) - area(a);
}

export function intersects(a: Rect, b: Rect): boolean {
  return !(a.x + a.w <= b.x || b.x + b.w <= a.x || a.y + a.h <= b.y || b.y + b.h <= a.y);
}

export function intersectionArea(a: Rect, b: Rect): number {
  const x = Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x));
  const y = Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));
  return x * y;
}
