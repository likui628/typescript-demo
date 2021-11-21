interface Box<Type> {
    contents: Type
}

function getContents<Type>(box: Box<Type>): Type {
    return box.contents
}

test("generic object", () => {
    let stringBox: Box<string> = {
        contents: "hello"
    }

    let numberBox: Box<number> = {
        contents: 1024
    }
    expect(getContents(stringBox)).toBe("hello")
    expect(getContents(numberBox)).toBe(1024)
})


test("readonly array", () => {
    // ReadonlyArray<Type> is a shorthand syntax of  readonly Type[].
    let a: readonly number[] = []
    let b: ReadonlyArray<number> = []

    //ts2339
    //a.push(0)
    //b.push(0)
    expect(a).toStrictEqual(b)
})

type Either2dOr3d = readonly [number, number, number?];

function getCoordinateLength(coord: Either2dOr3d) {
    return coord.length;
}

test("tuple types", () => {
    let a: Either2dOr3d = [1, 2]
    let b: Either2dOr3d = [1, 2, 3]
    expect(getCoordinateLength(a)).toBe(2);
    expect(getCoordinateLength(b)).toBe(3)
})
