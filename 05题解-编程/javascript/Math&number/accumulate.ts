// ===
// Detail: accumulate, partial sum array
// Example：[1, 2, 3, 4] => [1, 3, 6, 10]
// Tags: Array
// Expertise: intermediate
// ===

// Solution1: function programming
function accumulate(arr: number[]): number[] {
  return arr.reduce((prev_arr, v, idx) =>
    [...prev_arr, v + (idx === 0 ? 0 : prev_arr[idx - 1])], [])
}


// Solution1: function programming
function accumulate2(arr: number[]): number[] {
  if (arr.length === 1) return arr
  let result = [...arr];
  for (let i = 1; i < result.length; i++) {
    result[i] += result[i - 1]
  }
  return result
}


// test
console.log(accumulate([1, 2, 3, 4])) // [1, 3, 6, 10]
console.log(accumulate([3, 6, 9, 8, 5])) // [3, 9, 18, 26, 31]

console.log(accumulate2([1, 2, 3, 4])) // [1, 3, 6, 10]
console.log(accumulate2([3, 6, 9, 8, 5])) // [3, 9, 18, 26, 31]