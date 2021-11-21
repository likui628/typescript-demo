// https://www.typescriptlang.org/docs/handbook/2/functions.html#constraints 

function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}


test("constraints same type", () => {
    let longerArray = longest([1, 2, 3], [1, 2, 3, 4, 5]);
    expect(longerArray).toStrictEqual([1, 2, 3, 4, 5]);
});

test("constraints different types", () => {
    let longerArray = longest<number[] | string>([1, 2, 3], "12345");
    expect(longerArray).toStrictEqual("12345");
});
