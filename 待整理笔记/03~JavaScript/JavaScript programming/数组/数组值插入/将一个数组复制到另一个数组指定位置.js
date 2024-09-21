function insertIntoArray(arr1, arr2, n) {
  // the arr2 should remain the same after function excuted
  let result = arr2.slice();
  for (let i = 0; i < arr1.length; i++, n++) {
    result.splice(n, 0, arr1[i]);
  }
  return result;
}
let result = insertIntoArray([1, 2, 3], [4, 5, 6], 1);
console.log(result); // [ 4, 1, 2, 3, 5, 6 ]
