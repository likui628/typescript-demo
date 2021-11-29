import { Equal, Expect } from '@type-challenges/utils'

type Uppercase<C extends string> = C extends 'a' ? 'A' :
  C extends 'a' ? 'A' :
  C extends 'b' ? 'B' :
  C extends 'c' ? 'C' :
  C extends 'd' ? 'D' :
  C extends 'e' ? 'E' :
  C extends 'f' ? 'F' :
  C extends 'g' ? 'G' :
  C extends 'h' ? 'H' :
  C extends 'i' ? 'I' :
  C extends 'j' ? 'J' :
  C extends 'k' ? 'K' :
  C extends 'l' ? 'L' :
  C extends 'm' ? 'M' :
  C extends 'n' ? 'N' :
  C extends 'o' ? 'O' :
  C extends 'p' ? 'P' :
  C extends 'q' ? 'Q' :
  C extends 'r' ? 'R' :
  C extends 's' ? 'S' :
  C extends 't' ? 'T' :
  C extends 'u' ? 'U' :
  C extends 'v' ? 'V' :
  C extends 'w' ? 'W' :
  C extends 'x' ? 'X' :
  C extends 'y' ? 'Y' :
  C extends 'z' ? 'Z' :
  C

type Capitalize<S extends string> = S extends `${infer H}${infer L}` ? `${Uppercase<H>}${L}` : S

type cases = [
  Expect<Equal<Capitalize<'foobar'>, 'Foobar'>>,
  Expect<Equal<Capitalize<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<Capitalize<'foo bar'>, 'Foo bar'>>,
  Expect<Equal<Capitalize<''>, ''>>,
]
