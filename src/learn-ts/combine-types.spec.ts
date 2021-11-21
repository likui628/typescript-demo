interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
}


interface AddressWithUnit extends BasicAddress {
    unit: string
}

test("combine types: extends", () => {
    let addr: AddressWithUnit = {
        street: "shangnan rd.",
        city: "shanghai",
        country: "china",
        postalCode: "233000",
        unit: "001"
    }
    expect(addr).toBeTruthy()
})

interface Colorfull {
    color: string
}

interface Circle {
    radius: number
}

function draw(circle: Colorfull & Circle) {
    //draw 
}

test("combine types: intersection", () => {
    let colorfullCirlce: Colorfull & Circle = {
        color: "red",
        radius: 20
    }

    expect(() => draw(colorfullCirlce)).not.toThrow()
})