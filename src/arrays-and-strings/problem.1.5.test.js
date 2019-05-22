const isOneEditDifference = require('./problem.1.5');

test("pale, ple -> true", () => {
  expect(isOneEditDifference("pale", "ple")).toBe(true);
});

test("pales, pales -> true", () => {
  expect(isOneEditDifference("pales", "pale")).toBe(true);
});

test("pale, bale -> true", () => {
  expect(isOneEditDifference("pale", "bale")).toBe(true);
});

test("pale, bake -> false", () => {
  expect(isOneEditDifference("pale", "bake")).toBe(false);
});

test("empty, empty -> false", () => {
  expect(isOneEditDifference(null, undefined)).toBe(false);
  expect(isOneEditDifference(null, "")).toBe(false);
  expect(isOneEditDifference("", "")).toBe(false);
});