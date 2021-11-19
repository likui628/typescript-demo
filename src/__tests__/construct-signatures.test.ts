import { SomeConstructor, CallOrConstruct } from "../construct-signatures";

test("SomeConstructor", () => {
  function func(ctor: SomeConstructor) {
    return new ctor("hello");
  }

  expect(func(String).toString()).toBe("hello");
});

test("CallOrConstruct: call", () => {
  function func(ctor: CallOrConstruct) {
    return ctor();
  }
  expect(typeof func(Date)).toBe("string");
});

test("CallOrConstruct: construct", () => {
  function func(ctor: CallOrConstruct) {
    return new ctor("2021-12-31");
  }
  expect(func(Date)).toBeInstanceOf(Date);
});
