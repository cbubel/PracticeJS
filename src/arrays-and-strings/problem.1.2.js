function isPermutation (a, b) {
  if (!a || !b) return false;
  if (a.length !== b.length) return false;

  const uniqueChars = countUniqueChars(a);

  for (let char of b) {
    if (uniqueChars[char]) {
      uniqueChars[char]--;
      if (uniqueChars[char] < 0) return false;
    } else return false;
  }

  return true;
}

function countUniqueChars (string) {
  const dict = {};

  if (!string) return dict;

  for (let char of string) {
    if (!dict[char]) {
      dict[char] = 1;
    } else {
      dict[char]++;
    }
  }

  return dict;
}

module.exports = isPermutation;