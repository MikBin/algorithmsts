import { KDTree } from '../../data-structures';

/**
 * Distance to Measure (DTM)
 * Computes the distance from a query point to a probability measure defined by a dataset.
 * Specifically, this implements the empirical DTM, which is the root mean square distance
 * to the k-nearest neighbors in the dataset.
 *
 * Formula: DTM(x) = sqrt( (1/k) * sum_{i=1}^k ||x - p_i||^2 )
 * where p_i are the k nearest neighbors of x in the dataset.
 *
 * @param point - The query point vector (dimension d)
 * @param dataset - The dataset vectors (array of points of dimension d)
 * @param k - The number of nearest neighbors to consider (smoothing parameter)
 * @returns The distance-to-measure value
 * @throws Error if inputs are invalid (mismatched dimensions, invalid k, empty data)
 */
export function distanceToMeasure(point: number[], dataset: number[][], k: number): number {
  if (!Array.isArray(point) || point.length === 0) {
    throw new RangeError('Point cannot be empty');
  }
  if (!Array.isArray(dataset) || dataset.length === 0) {
    throw new RangeError('Dataset cannot be empty');
  }
  if (!Number.isFinite(k) || k <= 0) {
    throw new RangeError('k must be positive');
  }
  if (k > dataset.length) {
    throw new RangeError(`k (${k}) cannot be larger than dataset size (${dataset.length})`);
  }

  const dimensions = point.length;
  const tree = new KDTree(dimensions);

  for (let i = 0; i < dataset.length; i++) {
    const p = dataset[i];
    if (!Array.isArray(p) || p.length !== dimensions) {
      throw new RangeError(`Dataset point at index ${i} has dimension ${Array.isArray(p) ? p.length : 'N/A'}, expected ${dimensions}`);
    }
    tree.insert(p);
  }

  const nearest = tree.kNearest(point, k);

  let sumSqDist = 0;
  for (const neighbor of nearest) {
    sumSqDist += neighbor.dist * neighbor.dist;
  }

  return Math.sqrt(sumSqDist / k);
}
