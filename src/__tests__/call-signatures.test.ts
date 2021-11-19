import { doSomething } from "../call-signatures";

test("greaterThanTen", () => {
  function greaterThanTen(someArg: number) {
    return someArg > 10;
  }
  greaterThanTen.description = "greaterThanTen";

  expect(doSomething(greaterThanTen)).toContain("false");
});

test("isEven", () => {
  const isEven = (someArg: number) => someArg % 2 === 0;
  isEven.description = "isEven";

  expect(doSomething(isEven)).toContain("true");
});
