// https://www.typescriptlang.org/docs/handbook/2/functions.html#writing-good-overloads

// overloaded version
export function len1(s: string): number;
export function len1(arr: any[]): number;

export function len1(x: any) {
  return x.length;
}

// non-overloaded version
// Always prefer parameters with union types instead of overloads when possible
export function len2(x: any[] | string) {
  return x.length;
}
