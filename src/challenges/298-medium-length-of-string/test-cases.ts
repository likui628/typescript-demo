import { Equal, Expect } from '@type-challenges/utils'

type LengthOfString<S extends string, T extends any[] = []> = S extends `${infer H}${infer L}`
  ? LengthOfString<L, [...T, H]>
  : T['length']
  
type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]
