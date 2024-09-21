/**
 * @description unite array arguments, and make them unique
 * @chinese 将所有数组参数组合在一起，然后去重
 * @param ...arr
 */

function uniteUnique(...arr) {
  // arr is an array, its element is array too
  // make it between an one dimension array, use [].concat(...arr)
  // first flat
  return [...new Set([].concat(...arr))];
}

function uniteUnique2(...arr) {
  return arr.reduce((prev, next) =>
    prev.concat(next.filter(item => prev.indexOf(item) == -1))
  );
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique2([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// =================
/**
 * @description return the repeated element in array
 * @chindese 返回数组中重复元素
 * @param {array} array
 */
function getRepeated(arr) {
  let result = [];
  this.forEach((item, index) => {
    // 向前往后查找一遍和从后往前查找一遍,不等就是没有重复
    // 还要判断result数组有没有重复
    if (
      this.indexOf(item) !== this.lastIndexOf(item) &&
      result.indexOf(item) === -1
    ) {
      // 如果重复
      result.push(item);
    }
  });
  // end forEach
  return result;
}

// ========= 数组合并，要求去重。单个数组可以重复，
// 合并两个数组不能重复
function niteUnique3(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.indexOf(arr2[i]) == -1 || arr1.push(arr2[9]);
  }
}
