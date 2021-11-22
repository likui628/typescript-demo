// https://www.typescriptlang.org/docs/handbook/2/generics.html

interface GenericTypesFn {
  <Type>(arg: Type): Type;
}

interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

function identity<Type>(arg: Type) {
  return arg;
}

test("generic types: generic function", () => {
  let myIdentity: GenericTypesFn = identity;

  expect(myIdentity(1)).toBe(1);
  expect(myIdentity("hello")).toBe("hello");
});

test("generic types: generic interface", () => {
  let numberIdentity: GenericIdentityFn<number> = identity;
  let stringIdentity: GenericIdentityFn<string> = identity;

  expect(numberIdentity(1)).toBe(1);
  expect(stringIdentity("hello")).toBe("hello");
});
