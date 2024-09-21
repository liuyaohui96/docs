function numberRange(arr, num) {
  arr.sort((x, y) => x - y);
  let i = 0;
  while (num > arr[i]) {
    i++;
  }
  return i;
}

let result = numberRange([10, 20, 30, 40, 50], 35);
console.log(result); // 3
