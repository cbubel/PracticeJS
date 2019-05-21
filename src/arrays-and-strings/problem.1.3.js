function encodeSpaces (string) {
  if (!string) return "";

  const chars = [];
  let sawFirstChar = false;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      if (!sawFirstChar) continue;

      // Don't push repeated spaces
      if (i > 0 && string[i - 1] !== " ") {
        chars.push("%20")
      }
    } else {
      sawFirstChar = true;
      chars.push(string[i]);
    }
  }

  return chars[chars.length - 1] === "%20"
    ? chars.slice(0, chars.length - 1).join("")
    : chars.join("");
}

module.exports = encodeSpaces;