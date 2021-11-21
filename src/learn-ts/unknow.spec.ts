// https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown
function fun(a: unknown) {
    /* @ts-ignore */
    a.b();
}

test("unknown", () => {
    expect(() => fun({ b: () => { } })).not.toThrow()
    expect(() => fun({})).toThrow()
})