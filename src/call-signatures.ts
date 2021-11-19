// https://www.typescriptlang.org/docs/handbook/2/functions.html#call-signatures
// https://stackoverflow.com/questions/69504538/call-signatures-example-on-ts-handbook

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
export function doSomething(fn: DescribableFunction): string {
  return fn.description + " returned " + fn(6);
}
