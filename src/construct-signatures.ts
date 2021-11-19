// https://www.typescriptlang.org/docs/handbook/2/functions.html#construct-signatures

type SomeObject = any;

export type SomeConstructor = {
  new (s: string): SomeObject;
};

export interface CallOrConstruct {
  new (s: string): Date;
  (): string;
}
