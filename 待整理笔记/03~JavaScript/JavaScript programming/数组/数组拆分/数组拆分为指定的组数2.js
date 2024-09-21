function diveIntoGroups(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
let result = diveIntoGroups(['a', 'b', 'c', 'd'], 2);
console.log(result); // [ [ 'a', 'b' ], [ 'c', 'd' ] ]
