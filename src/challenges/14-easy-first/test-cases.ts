import { Equal, Expect } from '@type-challenges/utils'

// type First<T extends Array<any>> = T extends Array<never> ? never : T[0]
// type First<T extends any[]> = T extends [] ? never : T[0]
type First<T extends any[]> = T extends [infer F, ...infer _] ? F : never

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
]
