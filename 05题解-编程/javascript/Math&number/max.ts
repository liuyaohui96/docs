// ===
// Detail: find the max item in an array
// Example：[1, 2, 3] => 3
// Tags: Math, max
// Expertise: beginner
// ===

// Solution1:
function max(arr: number[]): number {
  if (arr.length === 1) return arr[0]
  let max = arr[0]
  for (let i = 1; i < arr.length; i++)
    max = arr[i] > max ? arr[i] : max
  return max
}

function max2(arr: number[]): number {
  return arr.reduce((prev, v) => v > prev ? v : prev)
}

function max3(arr: number[]): number {
  if (arr.length === 1) return arr[0]
  // base case
  if (arr.length === 2)
    return arr[0] > arr[1] ? arr[0] : arr[1]
  else {
    let subMax = max3(arr.slice(1))
    return arr[0] > subMax ? arr[0] : subMax
  }
}



// test
console.log(max([1, 2, 3])) // => 3
console.log(max2([1, 2, 3])) // => 3
console.log(max3([1, 2, 3])) // => 3