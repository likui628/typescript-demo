import { Equal, Expect } from '@type-challenges/utils'

type ParseSign<T extends string> = T extends `${infer S}${any}`
  ? S extends "+" | "-"
  ? S
  : ""
  : "";

type ParsePercent<T extends string> = T extends `${any}%` ? "%" : "";

type ParseNumber<T extends string> =
  T extends `${ParseSign<T>}${infer N}${ParsePercent<T>}` ? N : "";


type PercentageParser<A extends string> = [
  ParseSign<A>,
  ParseNumber<A>,
  ParsePercent<A>
];

type Case1 = ['', '', '']
type Case2 = ['+', '', '']
type Case3 = ['+', '1', '']
type Case4 = ['+', '100', '%']
type Case5 = ['', '10', '%']
type Case6 = ['-', '99', '%']

type cases = [
    Expect<Equal<PercentageParser<''>, Case1>>,
    Expect<Equal<PercentageParser<'+'>, Case2>>,
    Expect<Equal<PercentageParser<'+1'>, Case3>>,
    Expect<Equal<PercentageParser<'+100%'>, Case4>>,
    Expect<Equal<PercentageParser<'10%'>, Case5>>,
    Expect<Equal<PercentageParser<'-99%'>, Case6>>,
]
