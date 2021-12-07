import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type Shift<T extends any[]> = T extends [infer _, ...infer Rest] ? [...Rest] : T

type cases = [
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<['a', 'b', 'c', 'd', ]>, ['b', 'c', 'd']>>,
]
