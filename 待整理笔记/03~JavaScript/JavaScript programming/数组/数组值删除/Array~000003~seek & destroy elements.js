/**
 * @description find all argument, and delete in array
 * @chinese 根据argument参数列表，从数组中移除相应的数
 * @param {arrary} arr
 * @param {any} ...arg
 */

let arr1 = [1, 2, 3, 5];
function delteElementInArr(arr, ...arg) {
  return arr.filter(item => !arg.includes(item));
}
console.log(delteElementInArr(arr1, 3, 4)); // [ 1, 2, 5 ]
