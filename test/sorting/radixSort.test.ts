import { iterativeQueryRange } from '../../src/segmentTree/segmentTree'
import { radixSortNumbers } from '../../src/sorting/radixSort'

describe('test radixSort', () => {
  const testArray: number[] = [1, 4, 23, 2, 55, 6, 45, 8, 7, 88, 8]
  const sorted = [...testArray].sort((a, b) => a - b)
  it('sorts ascending', () => {
    const res = radixSortNumbers(testArray)
    expect(res).toEqual(sorted)
  })

  const longArrayLowSigma = new Array(1000000).fill(0).map(n => Math.round(Math.random() * 99))
  it('test performance differences: ', () => {
    console.time('radix')
    const res = radixSortNumbers(longArrayLowSigma)
    console.timeEnd('radix')
    console.time('sort')
    const sorted = longArrayLowSigma.sort((a, b) => a - b)
    console.timeEnd('sort')
    expect(res).toEqual(sorted)
  })
})
