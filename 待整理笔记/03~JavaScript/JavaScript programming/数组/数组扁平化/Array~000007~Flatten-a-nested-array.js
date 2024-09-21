/**
 * @description flatten a nested array
 * @argument {array} arr
 * @return {array}
 */

function flattenArr(arr) {
  let flatArr = [].concat(...arr);
  if (flatArr.some(item => Array.isArray(item))) return flattenArr(flatArr);
  else {
    return flatArr;
  }
}

// 循环版本
function flattenArr2(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

// 在此基础上的去重
function uniteUnique(arr) {
  let flatArr = flattenArr(arr);
  return [...new Set(flatArr)];
}

//=========比较繁琐的方法
function flattenArr3(arr) {
  let result = [];
  // 解绑
  function flatten(flat) {
    // 如果不是数组
    if (!Array.isArray(flat)) {
      result.push(flat);
    } else {
      flat.forEach(item => flatten(item));
    }
  }

  arr.forEach(item => flatten(item));
  return result;
}

function flattenArr4(arr) {
  return arr.reduce(
    (prev, next) => prev.concat(Array.isArray(next) ? flattenArr4(next) : next),
    []
  );
}

// ===== 测试部分
let result = flattenArr([1, [2], [3, [[4]]]]);
console.log(result);
result = flattenArr2([1, [2], [3, [[4]]]]);
console.log(result);
result = flattenArr3([1, [2], [3, [[4]]]]);
console.log(result);
result = flattenArr4([1, [2], [3, [[4]]]]);
console.log(result);

result = uniteUnique([1, [2], [3, 2, 1, [[4, 1]]]]);
console.log(result);
