import { Equal, Expect } from '@type-challenges/utils'

/**
 * Key Remapping via `as`
 * https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as
 */
type MyOmit<T, K extends keyof T> = { [P in keyof T as P extends K ? never : P]: T[P] }

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}
