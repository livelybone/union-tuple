export type IsTuple<Tuple extends any[]> = {
  empty: true
  nonEmpty: ((...p: Tuple) => any) extends (
    p1: infer First,
    ...p: infer Rest
  ) => any
    ? IsTuple<Rest>
    : false
  infinite: false
}[Tuple extends []
  ? 'empty'
  : Tuple extends (infer Element)[]
  ? Element[] extends Tuple
    ? 'infinite'
    : 'nonEmpty'
  : never]

export type TupleToUnion<T> = T extends (infer E)[] ? E : never

export type UnionPop<U> = ((U extends any
? (k: (x: U) => void) => void
: never) extends (k: infer I) => void
? I
: never) extends { (a: infer A): void }
  ? A
  : never

export type TuplePrepend<T extends any[], E> = ((
  a: E,
  ...r: T
) => void) extends (...r: infer R) => void
  ? R
  : never

type UnionToTupleRecursively<Union, Result extends any[]> = {
  1: Result
  0: UnionToTupleRecursively<
    Exclude<Union, UnionPop<Union>>,
    TuplePrepend<Result, UnionPop<Union>>
  >
}[[Union] extends [never] ? 1 : 0]

export type UnionToTuple<U> = UnionToTupleRecursively<U, []>

type UnionToTupleWithMapRecursively<
  Union extends string | number | symbol,
  Map extends { [k in Union]: any },
  Result extends any[]
> = {
  1: Result
  0: UnionToTupleWithMapRecursively<
    Exclude<Union, UnionPop<Union>>,
    Map,
    TuplePrepend<Result, Map[UnionPop<Union>]>
  >
}[[Union] extends [never] ? 1 : 0]

export type UnionToTupleWithMap<
  U extends string | number | symbol,
  Map extends { [k in any]: any }
> = UnionToTupleWithMapRecursively<U, Map, []>

export type TupleMap<
  T extends any[],
  Map extends { [k in any]: any }
> = UnionToTupleWithMap<TupleToUnion<T>, Map>
