function diveIntoGroups(arr, size) {
  let result = [];
  while (arr.length) result.push(arr.splice(0, size));
  return result;
}
let result = diveIntoGroups(['a', 'b', 'c', 'd'], 2);
console.log(result); // [ [ 'a', 'b' ], [ 'c', 'd' ] ]
