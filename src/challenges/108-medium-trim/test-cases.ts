import { Equal, Expect } from '@type-challenges/utils'

type Space = ' ' | '\n' | '\t'

type TrimLeft<S extends string> = S extends `${Space}${infer Right}` ? TrimLeft<`${Right}`> : S
type TrimRight<S extends string> = S extends `${infer Left}${Space}` ? TrimRight<`${Left}`> : S

type Trim<S extends string> = TrimLeft<TrimRight<S>>

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
]
