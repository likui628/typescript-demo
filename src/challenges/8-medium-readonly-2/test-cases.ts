import { Alike, Expect } from '@type-challenges/utils'

/**
 * Intersection Types
 * https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types
 */
 type MyReadonly2<T, K extends keyof T = keyof T> = { [P in keyof T as P extends K ? never : P]: T[P] }
 & { readonly [P in keyof T as P extends K ? P : never]: T[P] }
 
type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
]

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}
