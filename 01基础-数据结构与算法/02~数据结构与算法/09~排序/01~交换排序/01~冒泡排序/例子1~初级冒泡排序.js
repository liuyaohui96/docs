function bubbleSort(arr) {
  if (arr.length < 2) return;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]]; // 反序则交换
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
