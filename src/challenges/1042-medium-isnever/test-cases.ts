import { Equal, Expect } from '@type-challenges/utils'

/**
 * https://github.com/Microsoft/TypeScript/issues/23182#issuecomment-379091887
 * stop it being distributive.
 */
type IsNever<T> = [T] extends [never] ? true : false

type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<"">, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>,
]
