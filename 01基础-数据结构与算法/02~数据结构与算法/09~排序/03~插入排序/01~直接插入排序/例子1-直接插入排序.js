function insertSort(arr) {
  if (arr.length < 2) return;
  for (let i = 1; i < arr.length; i++) {
    // j 约束仅到达排好序的序列始端，且在后一个元素大于前一个元素才进行交换，否则退出
    for (let j = i - 1; j >= 0 && arr[j + 1] < arr[j]; j--) {
      [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]; // 反序则交换
    }
  }
}

let arr = [9, 5, 2, 7];
let arr2 = [3, 2, 8, 7];
insertSort(arr);
insertSort(arr2);

console.log(arr); // [ 2, 5, 7, 9 ]
console.log(arr2); // [ 2, 3, 7, 8 ]
