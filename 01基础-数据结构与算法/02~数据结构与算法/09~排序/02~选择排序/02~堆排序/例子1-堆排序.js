function heapSort(arr) {
  if (arr.length < 2) return;
  // 根据大顶堆，调整数组
  for (let i = ~~(arr.length / 2) - 1; i >= 0; i--) heapify(arr, arr.length, i);

  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // 交换根节点与末尾节点，因为根节点是最大值
    heapify(arr, i, 0); // i表示去除了末尾节点后的数字长度，0表示交换后的根节点，对新的根节点重新调整
  }
}

// 与它的孩子进行比较，从中选择比它更大的进行交换，如果发生了交换，被交换的孩子需要重新调整
function heapify(arr, n, i) {
  let largest = i; // 初始化largest指向i位置节点
  let left = 2 * i + 1; // left = 2*i+1
  let right = 2 * i + 2; // right = 2*i+2
  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;
  if (largest != i) {
    [arr[largest], arr[i]] = [arr[i], arr[largest]]; // 当前的i节点与较大位置节点交换
    heapify(arr, n, largest); // left或right可能与largest位置的值发生了交换，需要重新调整
  }
}

// === 测试
let arr = [9, 5, 2, 7];
let arr2 = [3, 2, 8, 7];
heapSort(arr);
heapSort(arr2);
console.log(arr); // [ 2, 5, 7, 9 ]
console.log(arr2); // [ 2, 3, 7, 8 ]
