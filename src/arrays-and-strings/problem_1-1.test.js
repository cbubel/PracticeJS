const allUniqueChars = require("./problem_1-1");

test("abc is unique", () => {
  expect(allUniqueChars("abc")).toBe(true);
});

test("aaa is not unique", () => {
  expect(allUniqueChars("aaa")).toBe(false);
});

test("empty string, null, undefined are unique", () => {
  expect(allUniqueChars("")).toBe(true);
  expect(allUniqueChars(null)).toBe(true);
  expect(allUniqueChars(undefined)).toBe(true);
});

test("multiple whitespace is not unique", () => {
  expect(allUniqueChars("  ")).toBe(false);
});