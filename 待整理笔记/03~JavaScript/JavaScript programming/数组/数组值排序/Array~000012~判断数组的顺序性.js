let isSorted = arr => {
  return arr.every((item, index) => !index || item >= arr[index - 1])
    ? 1
    : arr.every((item, index) => !index || item <= arr[index - 1])
    ? -1
    : 0;
};

let arr = [3, 2, 1, 0];
console.log(isSorted(arr)); // -1
arr = [1, 2, 3, 4];
console.log(isSorted(arr)); // 1
arr = [4, 5, 3, 7];
console.log(isSorted(arr)); // 0
