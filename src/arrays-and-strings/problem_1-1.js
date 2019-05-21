function allUniqueChars (string) {
  if (!string) return true;

  const set = new Set();
  for (let char of string) {
    if (set.has(char)) return false;
    set.add(char);
  }

  return true;
}

module.exports = allUniqueChars;