import { Equal, Expect } from '@type-challenges/utils'

/**
 * Inferring Within Conditional Types
 * https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types
 */
type Awaited<T extends Promise<unknown>> = T extends Promise<infer R> ? (R extends Promise<unknown> ? Awaited<R> : R) : never;

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>

type cases = [
  Expect<Equal<Awaited<X>, string>>,
  Expect<Equal<Awaited<Y>, { field: number }>>,
  Expect<Equal<Awaited<Z>, string | number>>,
]

// @ts-expect-error
type error = Awaited<number>
