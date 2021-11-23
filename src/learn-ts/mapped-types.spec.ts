type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type ReadonlyConcrete<Type> = {
  +readonly [Property in keyof Type]-?: Type[Property];
};

test("mapped types", () => {
  type readonlyUser = ReadonlyConcrete<MaybeUser>;
});

interface Person {
  name: string;
  age: number;
  location: string;
}

type Getters<Type> = {
  //Capitalize<S extends string>
  [P in keyof Type as `get${Capitalize<string & P>}`]: () => Type[P];
};

test("mapped types: as", () => {
  type LazyPerson = Getters<Person>;
});

type EventConfig<Events extends { kind: string }> = {
  [E in Events as E["kind"]]: (event: E) => void;
};

type SquareEvent = { kind: "square"; x: number; y: number };
type CircleEvent = { kind: "circle"; radius: number };

test("mapped types: remapping as", () => {
  type Config = EventConfig<SquareEvent | CircleEvent>;
});

type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};

type ExtractPII<Type> = {
  [P in keyof Type]: Type[P] extends { pii: boolean } ? true : false;
};

test("mapped types: extract", () => {
  type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;
});