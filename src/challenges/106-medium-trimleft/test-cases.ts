import { Equal, Expect } from '@type-challenges/utils'

type Space = ' ' | '\n' | '\t'

type TrimLeft<S extends string> = S extends `${Space}${infer Right}` ? TrimLeft<`${Right}`> : S

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
]
