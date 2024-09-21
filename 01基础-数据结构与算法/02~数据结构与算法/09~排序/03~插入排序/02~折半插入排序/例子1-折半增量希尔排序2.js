function shellSort(arr) {
  if (arr.length < 2) return;

  for (let gap = ~~(arr.length / 2); gap > 0; gap = ~~(gap / 2)) {
    // 假设gap后是未排好序的序列
    for (let i = gap; i < arr.length; i++) {
      // 迭代排好序的序列，分别与后面的项比较
      for (let j = i - gap; j >= 0 && arr[j + gap] < arr[j]; j -= gap) {
        [arr[j], arr[j + gap]] = [arr[j + gap], arr[j]];
      }
    }
  }
}

let arr = [9, 5, 2, 7];
let arr2 = [3, 2, 8, 7];
shellSort(arr);
shellSort(arr2);
console.log(arr); // [ 2, 5, 7, 9 ]
console.log(arr2); // [ 2, 3, 7, 8 ]
