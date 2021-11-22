// https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

// M is string | number — this is because JavaScript object keys are always coerced to a string
function get(a: M) {
  return a;
}

test("keyof types", () => {
  expect(get(0)).toBe(0);
  expect(get("a")).toBe("a");
});
