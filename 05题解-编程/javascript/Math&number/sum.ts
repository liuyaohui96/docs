// ===
// Detail: sum
// Example：[1, 2, 3] => 6
// Tags: Math, sum
// Expertise: beginner
// ===

// Solution1:
function sum(arr: number[]): number {
  return arr.length
    ? arr[0] + sum(arr.slice(1))
    : 0
}


// javascrript function programming
function sum2(arr: number[]): number {
  return arr.reduce((prev, v) => prev + v, 0)
}

// javascript precedure programming
function sum3(arr: number[]): number {
  let total = 0
  for (let i = 0; i < arr.length; i++)
    total += arr[i]
  return total
}



// test
console.log(sum([1, 2, 3])) // => 6
console.log(sum([4, 2, 3, 5])) // => 14

console.log(sum2([1, 2, 3])) // => 6

console.log(sum3([1, 2, 3])) // => 6

