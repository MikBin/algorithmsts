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
//function interface: https://www.typescriptlang.org/docs/handbook/interfaces.html
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
