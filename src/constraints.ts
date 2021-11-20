// https://www.typescriptlang.org/docs/handbook/2/functions.html#constraints 

export function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}
