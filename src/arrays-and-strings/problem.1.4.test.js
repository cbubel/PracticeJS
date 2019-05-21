const isPalindromePermutation = require('./problem.1.4');

test("Tact Coa is palindrome permutation", () => {
  expect(isPalindromePermutation("Tact Coa")).toBe(true);
});

test("Word is not palindrome permutation", () => {
  expect(isPalindromePermutation("Word")).toBe(false);
});

test("Empty/whitespace is not palindrome permutation", () => {
  expect(isPalindromePermutation("")).toBe(false);
  expect(isPalindromePermutation("   ")).toBe(false);
  expect(isPalindromePermutation(null)).toBe(false);
  expect(isPalindromePermutation(undefined)).toBe(false);
});