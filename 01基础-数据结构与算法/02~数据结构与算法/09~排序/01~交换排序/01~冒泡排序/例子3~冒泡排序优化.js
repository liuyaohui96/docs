function bubbleSort(arr) {
  if (arr.length < 2) return;
  // end > 0 表示end在首个元素前终止
  // flag 判断是否有序，有序则退出
  for (let end = arr.length - 1, flag = true; end > 0 && flag; end--) {
    flag = false;
    // i从 0 到 end-1
    for (let i = 0; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        flag = true; // 反序则交换，并设置为true
      }
    }
  }
}

// === 测试
let arr = [9, 5, 2, 7];
let arr2 = [3, 2, 8, 7];
bubbleSort(arr);
bubbleSort(arr2);
console.log(arr); // [ 2, 5, 7, 9 ]
console.log(arr2); // [ 2, 3, 7, 8 ]
