// 一个绝对正确的方法, 但是时间复杂度较高的算法
// 如bubblesort
function bubbleSort(arr) {
  // 数组长度小于2，直接返回
  if (arr.length < 2) return;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      // 前一个数 大于后一个数，则交换
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
}

module.exports = bubbleSort;
