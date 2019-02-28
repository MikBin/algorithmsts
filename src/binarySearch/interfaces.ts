/**@TODO make it in global interfaces as more classes are going to use it */
export type binaryComparisonRoutine<T> = (valueSearched: T, valueToCompareTo: T) => number;
