import { Equal, Expect } from '@type-challenges/utils'

/**
 * 'foo' extends string  => true
 *  string extends 'foo' => false
 */
type RemoveIndexSignature<T> = { [P in keyof T as string extends P ? never : number extends P ? never : P]: T[P] }

type Foo = {
  [key: string]: any;
  foo(): void;
}


type Bar = {
  [key: number]: any;
  bar(): void;
}

type Baz = {
  bar(): void;
  baz: string
}


type cases = [
  Expect<Equal< RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal< RemoveIndexSignature<Bar>, { bar(): void }>>,
  Expect<Equal< RemoveIndexSignature<Baz>, { bar(): void, baz: string }>>
]
