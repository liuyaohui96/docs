// ===
// Detail: check if items in Array are unique
// Example：[1, 2, 3, 4] => true | [1, 1, 2, 3] => false
// Tags: Array Set
// Expertise: beginner
// ===

// Solution1:
function checkUnique(arr: any[]): boolean {
  return arr.length === new Set(arr).size
}

// test
console.log(checkUnique([1, 2, 3, 4])) // => true
console.log(checkUnique([1, 1, 2, 3])) // => false
