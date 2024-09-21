function findLargestNumber(arr) {
  return arr.map(group =>
    group.reduce((prev, current) => (current > prev ? current : prev))
  );
}
