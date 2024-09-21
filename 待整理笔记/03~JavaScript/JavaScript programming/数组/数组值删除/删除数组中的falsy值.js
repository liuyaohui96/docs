function filterArray(arr) {
  return arr.filter(Boolean);
}
let result = filterArray([7, 'ate', '', false, 9]);
console.log(result); // [ 7, 'ate', 9 ]
