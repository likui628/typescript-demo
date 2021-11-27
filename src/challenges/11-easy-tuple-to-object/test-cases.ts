import { Equal, Expect } from '@type-challenges/utils'

/**
 * Indexed Access Types
 * https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
 */
type TupleToObject<T extends readonly string[]> = { [P in T[number]]: P }

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y'}>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>
