// ===
// Detail: numbers to array of digits
// Example：795843 => [7,9,5,8,4,3]
// Tags: Array, Math
// Expertise: intermediate
// ===

// Solution1: function programming
function numsToArr(nums: number): number[] {
  return String(nums).split('').map(Number)
}


// Solution2: procedure programming
function numsToArr2(nums: number): number[] {
  let result = []
  while (nums >= 1) {
    result.unshift(nums % 10)
    nums = Math.floor(nums / 10)
  }
  return result
}


// test
console.log(numsToArr(795843)) // => [ 7, 9, 5, 8, 4, 3 ]
console.log(numsToArr2(795843)) // => [ 7, 9, 5, 8, 4, 3 ]

