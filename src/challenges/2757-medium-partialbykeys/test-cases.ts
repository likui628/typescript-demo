import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type ToObj<T> = { [P in keyof T]: T[P] }

type PartialByKeys<T, K extends keyof any = keyof T> = ToObj<
  { [P in keyof T as P extends K ? P : never]?: T[P] }
  & { [P in keyof T as P extends K ? never : P]: T[P] }>
  
interface User {
  name: string
  age: number
  address: string
}

interface UserPartialName {
  name?: string
  age: number
  address: string 
}

interface UserPartialNameAndAge {
  name?: string
  age?: number
  address: string 
}

type cases = [
  Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
]
