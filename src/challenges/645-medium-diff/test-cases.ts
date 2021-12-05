import { Equal, Expect } from '@type-challenges/utils'

/**
 * Intersection Types
 * https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types
 * Key remapping in Mapped Types
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#key-remapping-in-mapped-types
 * Exclude
 * https://www.typescriptlang.org/docs/handbook/utility-types.html#excludetype-excludedunion
 */
 type Diff<O, O1> = {
    [P in keyof O | keyof O1 as Exclude<P, keyof O & keyof O1>]
    : P extends keyof O
      ? O[P]
      : P extends keyof O1
      ? O1[P]
      : never
  }

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>
]
