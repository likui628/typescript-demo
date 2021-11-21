// https://www.typescriptlang.org/docs/handbook/2/functions.html#writing-good-overloads

// overloaded version
function len1(s: string): number;
function len1(arr: any[]): number;

function len1(x: any) {
    return x.length;
}

// non-overloaded version
// Always prefer parameters with union types instead of overloads when possible
function len2(x: any[] | string) {
    return x.length;
}


test("overloads", () => {
    expect(len1("")).toBe(0);
    expect(len1([0])).toBe(1);
    /*
    expect(len1(Math.random() > 0.5 ? "hello" : [0])).toBeTruthy();
  
      Overload 1 of 2, '(s: string): number', gave the following error.
        Argument of type 'number[] | "hello"' is not assignable to parameter of type 'string'.
            Type 'number[]' is not assignable to type 'string'.
      Overload 2 of 2, '(arr: any[]): number', gave the following error.
        Argument of type 'number[] | "hello"' is not assignable to parameter of type 'any[]'.
            Type 'string' is not assignable to type 'any[]'.
    */
});

test("non-overloaded", () => {
    expect(len2("")).toBe(0);
    expect(len2([0])).toBe(1);
    expect(len2(Math.random() > 0.5 ? "hello" : [0])).toBeTruthy();
});
