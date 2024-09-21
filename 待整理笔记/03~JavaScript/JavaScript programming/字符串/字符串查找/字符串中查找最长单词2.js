function findLongestWordLength(str) {
  return str.split(' ').reduce((x, y) => Math.max(x, y.length), 0);
}
