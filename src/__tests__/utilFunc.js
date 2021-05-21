import { sum } from "../utilFunc.js";

describe("sum", () => {
  it.each`
    a    | b    | expected
    ${1} | ${1} | ${2}
    ${1} | ${2} | ${3}
  `("returns $expected when summing $a and $b", ({ a, b, expected }) => {
    expect(a + b).toBe(expected);
  });
});
