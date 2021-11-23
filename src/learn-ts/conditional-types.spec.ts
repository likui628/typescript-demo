// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html

interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

test("conditional types: overloads", () => {
  function createLabel(id: number): IdLabel;
  function createLabel(name: string): NameLabel;
  function createLabel(nameOrId: string | number): IdLabel | NameLabel;

  function createLabel(nameOrId: string | number): IdLabel | NameLabel {
    if (typeof nameOrId == "string") {
      return { name: nameOrId } as NameLabel;
    }
    return { id: nameOrId } as IdLabel;
  }

  expect(createLabel("string")).toStrictEqual({ name: "string" });
  expect(createLabel(1024)).toStrictEqual({ id: 1024 });
});

test("conditional types", () => {
  type idOrName<T extends number | string> = T extends string
    ? NameLabel
    : IdLabel;

  function createLabel<T extends number | string>(nameOrId: T): idOrName<T> {
    if (typeof nameOrId == "string") {
      return { name: nameOrId } as idOrName<T>;
    }
    return { id: nameOrId } as idOrName<T>;
  }

  expect(createLabel("string")).toStrictEqual({ name: "string" });
  expect(createLabel(1024)).toStrictEqual({ id: 1024 });
});

test("conditional types: infer", () => {
  type GetReturnType<T> = T extends (...args: never[]) => infer Return
    ? Return
    : never;

  type Num = GetReturnType<() => number>;
  let num: Num = 1;

  type Str = GetReturnType<(x: string) => string>;
  let str: Str = "hello";

  type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;
  let bools: Bools = [true, false, true];
});
