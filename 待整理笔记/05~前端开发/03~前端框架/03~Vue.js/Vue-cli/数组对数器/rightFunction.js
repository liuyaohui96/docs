// 一个绝对正确的方法, 但是时间复杂度较高的算法
// 如bubblesort
function smallSum(arr) {
  let rt = [];
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j]) rt.push(arr[j]);
    }
  }
  return rt.reduce((x, y) => x + y, 0);
}

module.exports = smallSum;
