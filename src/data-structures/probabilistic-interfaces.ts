export type HashFn = (str: string, seed: number) => number;
export type Serializer<T> = (item: T) => string;

export interface IProbabilisticFilter<T> {
  mightContain(item: T): boolean;
  size(): number;
  toJson(): string;
}
