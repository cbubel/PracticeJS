const isPermutation = require("./problem.1.2");

test("add is permutation of dad", () => {
  expect(isPermutation("add", "dad")).toBe(true);
});

test("cat is not permutation of dog", () => {
  expect(isPermutation("cat", "dog")).toBe(false);
});

test("ca is not permutation of cat", () => {
  expect(isPermutation("ca", "cat")).toBe(false);
});

test("nulls are not permutations", () => {
  expect(isPermutation(null, "cat")).toBe(false);
  expect(isPermutation(undefined, null)).toBe(false);
  expect(isPermutation(undefined, "")).toBe(false);
});