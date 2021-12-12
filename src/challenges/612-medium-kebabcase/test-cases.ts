import { Equal, Expect } from '@type-challenges/utils'

type KebabCase<S> = S extends `${infer H}${infer L}` ? L extends Uncapitalize<L>
  ? `${Uncapitalize<H>}${KebabCase<L>}`
  : `${Uncapitalize<H>}-${KebabCase<Uncapitalize<L>>}`
  : S
  
type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>,
]
