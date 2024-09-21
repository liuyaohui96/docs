function numberRange(arr, num) {
  return arr
    .concat(num)
    .sort((x, y) => x - y)
    .indexOf(num);
}

let result = numberRange([10, 20, 30, 40, 50], 35);
console.log(result); // 3
