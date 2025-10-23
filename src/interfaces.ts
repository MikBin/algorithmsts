/**
 * Legacy Interfaces Module
 *
 * This module contains legacy interface definitions for backward compatibility.
 * New code should import interfaces from the core module instead.
 *
 * @deprecated Use interfaces from './core' module for new implementations
 * @module interfaces
 */

// Re-export core interfaces for backward compatibility
export * from './core';

// Legacy graph interface (deprecated - use core interfaces)
export * from './graphs/IGraph';

// Legacy utility interfaces
export interface StringTMap<T> {
  [key: string]: T
}
export interface NumberTMap<T> {
  [key: number]: T
}

export interface StringAnyMap extends StringTMap<any> {}
export interface NumberAnyMap extends NumberTMap<any> {}

export interface StringStringMap extends StringTMap<string> {}
export interface NumberStringMap extends NumberTMap<string> {}

export interface StringNumberMap extends StringTMap<number> {}
export interface NumberNumberMap extends NumberTMap<number> {}

export interface StringBooleanMap extends StringTMap<boolean> {}
export interface NumberBooleanMap extends NumberTMap<boolean> {}

export interface StringNumberArrayMap extends StringTMap<Array<number>> {}

/**return value is zero on strict equality, positive if valueSearched is bigger negative if smaller */
export type binaryComparisonRoutine<T> = (valueSearched: T, valueToCompareTo: T) => number

interface IteratorResult<T> {
  done: boolean
  value: T
}
interface Iterator<T> {
  next(value?: any): IteratorResult<T>
  return?(value?: any): IteratorResult<T>
  throw?(e?: any): IteratorResult<T>
}
export interface Iterable<T> {
  [Symbol.iterator](): Iterator<T>
  /*Iterator<T> iterator();
  forEach(function on T and index?)
 map

   */
}

export interface Collection<T> extends Iterable<T> {}
/**
 *
 *implement abstract classes too
 https://www.tutorialsteacher.com/typescript/abstract-class
 https://docs.oracle.com/javase/8/docs/api/?java/util/Collections.html
 https://docs.oracle.com/javase/8/docs/api/java/util/AbstractMap.html
 https://docs.oracle.com/javase/8/docs/api/javax/swing/AbstractListModel.html

 */

//  type digitsType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0
// type oneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
// type DD = `${0}${oneToNine}` | `${1 | 2}${digitsType}` | `3${0 | 1}`
// type YYYY = `19${digitsType}${digitsType}` | `20${digitsType}${digitsType}`
// type MM = `0${oneToNine}` | `1${0 | 1 | 2}`

// export type DateYMStringDashed = `${YYYY}-${MM}`
// export type DateYMDStringDashed = `${DateYMStringDashed}-${DD}`

// export type DateYMStringSlashed = `${YYYY}/${MM}`
// export type DateYMDStringSlashed = `${DateYMDStringSlashed}/${DD}`

// export type DateDMStringSlashed = `${DD}/${MM}`
// export type DateDMYStringSlashed = `${DateDMStringSlashed}/${YYYY}`
