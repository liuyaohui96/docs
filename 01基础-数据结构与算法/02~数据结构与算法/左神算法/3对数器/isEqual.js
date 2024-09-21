function isEqual(arr, arr2) {
  if (arr.length != arr2.length) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr2[i]) {
      return false;
    }
  }
  return true;
}

module.exports = isEqual;
