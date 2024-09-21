function isEqual(val, val2) {
  if (Array.isArray(val) && Array.isArray(val2)) {
    if (val.length != val2.length) return false;
    for (let i = 0; i < val.length; i++) {
      if (val[i] != val2[i]) {
        return false;
      }
    }
    return true;
  } else if (val == val2) return true;
  else return false;
}

module.exports = isEqual;
