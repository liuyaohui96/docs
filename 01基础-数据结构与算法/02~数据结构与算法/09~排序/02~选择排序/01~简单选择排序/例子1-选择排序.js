function selectSort(arr) {
  if (arr.length < 2) return;
  // 截至到最后一个元素前，完全排好序
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
  }
}

// === 测试
let arr = [9, 5, 2, 7];
let arr2 = [3, 2, 8, 7];
selectSort(arr);
selectSort(arr2);
console.log(arr); // [ 2, 5, 7, 9 ]
console.log(arr2); // [ 2, 3, 7, 8 ]
