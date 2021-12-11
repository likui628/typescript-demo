import { Alike, Expect } from '@type-challenges/utils'


type Chainable<O = {}> = {
    option<K extends string, V>(key: K, value: V): Chainable<O & { [P in K]: V }>
    get(): O
  }
  
declare const a: Chainable

const result = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

type cases = [
  Expect<Alike<typeof result, Expected>>
]

type Expected = {
  foo: number
  bar: {
    value: string
  }
  name: string
}
