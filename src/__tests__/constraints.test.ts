import { longest } from "../constraints";

test("constraints same type", () => {
  let longerArray = longest([1, 2, 3], [1, 2, 3, 4, 5]);
  expect(longerArray).toStrictEqual([1, 2, 3, 4, 5]);
});

test("constraints different types", () => {
  let longerArray = longest<number[] | string>([1, 2, 3], "12345");
  expect(longerArray).toStrictEqual("12345");
});
