/**
 * @description find elements that is not in other array
 * @chinese 两个数组中独特的元素
 * @param {array} arr1
 * @param {array} arr2
 */

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 3, 5, 7, 8];

// first concat, later filter
function findDiffElement(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.filter(item => !arr1.includes(item) || !arr2.includes(item));
}
console.log(findDiffElement(arr1, arr2)); // [ 1, 9, 2, 8 ]

// first filter, later concat
function findDiffElement2(arr1, arr2) {
  return [
    ...arr1.filter(item => !arr2.includes(item)),
    ...arr2.filter(item => !arr1.includes(item))
  ];
}
console.log(findDiffElement2(arr1, arr2)); // [ 1, 9, 2, 8 ]
