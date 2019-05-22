function isOneEditDifference (a, b) {
  if (!a || !b) return false;
  if (Math.abs(a.length - b.length) > 1) return false;

  if (a.length > b.length) {
    return isOneRemovalDifference(a, b);
  } else if (a.length < b.length) {
    return isOneRemovalDifference(b, a);
  } else if (a.length === b.length) {
    return isOneReplacementDifference(a, b);
  }
}

// Assumes Math.abs(a.length - b.length) === 1
function isOneRemovalDifference (a, b) {
  let count = 0;
  for (let a_idx = 0, b_idx = 0; ;) {
    if (b_idx === b.length) {
      if (a_idx < a.length) {
        count++;
      }
      break;
    }

    if (a[a_idx] !== b[b_idx]) {
      count++;
      if (count > 1) return false;
      a_idx++;
    } else {
      a_idx++;
      b_idx++;
    }
  }

  return count <= 1;
}

// Assumes a.length === b.length
function isOneReplacementDifference (a, b) {
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      count++;

      if (count > 1) return false;
    }
  }

  return true;
}

module.exports = isOneEditDifference;