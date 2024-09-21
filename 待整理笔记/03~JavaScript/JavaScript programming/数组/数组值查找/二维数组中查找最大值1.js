function findLargestNumber(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) largestNumber = arr[i][j];
    }
    result[i] = largestNumber;
  }
  return result;
}
let result = findLargestNumber([
  [3, 6, 9],
  [7, 6, 8]
]);
console.log(result);
