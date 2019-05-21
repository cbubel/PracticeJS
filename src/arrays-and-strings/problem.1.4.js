function isPalindromePermutation (string) {
  if (!string) return false;

  const set = new Set();
  let countedChars = 0;

  for (let char of string) {
    if (char === " ") continue;
    countedChars++;
    char = char.toLowerCase();
    if (set.has(char)) set.delete(char);
    else set.add(char);
  }

  return countedChars > 0 && set.size <= 1;
}

module.exports = isPalindromePermutation;