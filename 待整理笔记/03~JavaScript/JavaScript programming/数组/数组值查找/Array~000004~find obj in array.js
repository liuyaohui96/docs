/**
 * @description accordding to the obj, find its element array
 * @chinese 根据对象，从数组中找出包含这个对象的对象元素
 * @param {arrary} arr
 * @param {obj} targetObj
 */

let arr1 = [
  { first: 'Liu', last: 'Yaohui' },
  { first: 'John', last: null },
  { first: 'Mary', last: 'you' }
];
let targetObj = { last: 'Yaohui' };

function findObjInArray(arr, targetObj) {
  let keys = Object.keys(targetObj);

  return arr.filter(item =>
    keys.every(key => item.hasOwnProperty(key) && item[key] === targetObj[key])
  );
}

console.log(findObjInArray(arr1, targetObj));
// [ { first: 'Liu', last: 'Yaohui' } ]
