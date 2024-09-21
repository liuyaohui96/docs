/**
 * @description get the sum of number(连续数字之和)
 * @chindes 求连续数字之和
 * @param {array} arr
 * @return {number}
 */

let arr1 = [2, 3, 4, 5];

// computational complexity: O(n)
function getSumOfArray(arr) {
  return arr.reduce((prev, next) => prev + next, 0);
}
console.log(getSumOfArray(arr1)); // 14

function getSumOfArray2(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return ((min + max) * arr.length) / 2;
}
console.log(getSumOfArray2(arr1)); // 14
