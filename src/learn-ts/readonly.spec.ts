interface Person {
    name: string;
    age: number;
}

interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
}

test("readonly", () => {
    let writablePerson: Person = {
        name: "Person McPersonface",
        age: 42,
    }

    let readonlyPerson: ReadonlyPerson = writablePerson;
    writablePerson.age++;

    expect(readonlyPerson.age).toBe(43)

})