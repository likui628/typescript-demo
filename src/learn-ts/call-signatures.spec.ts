// https://www.typescriptlang.org/docs/handbook/2/functions.html#call-signatures
// https://stackoverflow.com/questions/69504538/call-signatures-example-on-ts-handbook

type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction): string {
    return fn.description + " returned " + fn(6);
}


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
