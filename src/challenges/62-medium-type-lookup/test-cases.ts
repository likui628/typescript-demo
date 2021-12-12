import { Equal, Expect } from '@type-challenges/utils'

/**
 * Distributive Conditional Types
 * https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
 * When conditional types act on a generic type, they become distributive when given a union type. 
 */
type LookUp<U, T> = U extends { type: T } ? U : never

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type Animal = Cat | Dog

type cases = [
  Expect<Equal<LookUp<Animal, 'dog'>, Dog>>,
  Expect<Equal<LookUp<Animal, 'cat'>, Cat>>,
]
