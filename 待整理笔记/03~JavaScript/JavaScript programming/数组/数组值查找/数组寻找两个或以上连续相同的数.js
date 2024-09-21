function find(arr) {
  let result = [];
  let i = 0;
  while (i < arr.length - 1) {
    if (arr[i + 1] == arr[i]) {
      if (!result.some(item => item == arr[i])) result.push(arr[i]);
    }
    i++;
  }
  return result;
}

let arr = [1, 1, 2, 2, 2, 2, 3, 4, 4, 5];
console.log(find(arr)); // [ 1, 2, 4 ]
