function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) return arr[i];
  }
  return undefined;
}
let result = findElement([1, 2, 4, 5], num => num % 2 === 0);
console.log(result);
