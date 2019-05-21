const encodeSpaces = require('./problem.1.3');

test("'  Mr John Smith    ' is Mr%20John%20Smith", () => {
  expect(encodeSpaces("  Mr John Smith    ")).toBe("Mr%20John%20Smith");
});

test("whitespace is empty", () => {
  expect(encodeSpaces(" ")).toBe("");
  expect(encodeSpaces("   ")).toBe("");
});

test("hello   world is 'hello%20world", () => {
  expect(encodeSpaces("hello   world")).toBe("hello%20world");
});