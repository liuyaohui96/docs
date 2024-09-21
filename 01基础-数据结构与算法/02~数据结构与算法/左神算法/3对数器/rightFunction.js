// 一个绝对正确的方法, 但是时间复杂度较高的算法
// 如bubblesort
function bubbleSort(arr) {
  if (arr.length < 2) return;

  for (let end = arr.length - 1; end > 0; end--) {
    for (let i = 0; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
      }
    }
  }
}

module.exports = bubbleSort;
