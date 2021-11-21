interface Foo {
    [key: string]: number;
}

interface Bar {
    [key: string]: number | string;
    readonly [key: number]: string;
}

test("Index Signatures: Foo", () => {
    let foo: Foo = {
        x: 1,
    }

    expect(foo).toMatchObject({ x: 1 })
})

test("Index Signatures: Bar", () => {
    let bar: Bar = {
        0: "zero",
        x: 1
    }

    //ts-2542
    //bar[0] = "two"

    expect(bar).toMatchObject({ 0: "zero", x: 1 })
})