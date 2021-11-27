import { Equal, Expect } from '@type-challenges/utils'

/**
 * Variadic Tuple Types
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types
 */
type Pop<T extends any[]> = T extends [...infer T,infer _] ? T :never

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd', ]>, ['a', 'b', 'c']>>,
]
