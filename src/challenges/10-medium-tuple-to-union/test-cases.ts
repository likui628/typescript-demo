import { Equal, Expect } from '@type-challenges/utils'

/**
 * Indexed Access Types
 * https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
 */
type TupleToUnion<T extends any[]> = T[number]

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]
