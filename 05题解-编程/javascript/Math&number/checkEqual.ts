// ===
// Detail: each item in arary, call the same
//   function, check if the return value
//   of function are same       
// Example：[1.3, 1.4, 1.5] Math.floor() => true
// Tags: Array, Math
// Expertise: intermediate
// ===

// Solution1:
type CheckEqualFunction = (arrItem: number | string) => unknown
type CheckEqualArray = any[]

function checkEqual(arr: CheckEqualArray, fn: CheckEqualFunction): boolean {
  let fnValue = fn(arr[0])
  return arr.every(item => fn(item) === fnValue)
}

function checkEqual2(fn: CheckEqualFunction, ...arr: CheckEqualArray): boolean {
  let fnValue = fn(arr[0])
  return arr.every(item => fn(item) === fnValue)
}


// test
console.log(checkEqual([1.3, 1.4, 1.5], Math.floor)) // => true
console.log(checkEqual([2.3, 1.4, 1.5], Math.floor)) // => false

console.log(checkEqual2(Math.floor, 1.3, 1.4, 1.5)) // => true
console.log(checkEqual2(Math.floor, 2.3, 1.4, 1.5)) // => false