// ===
// Detail: average the items
// Example：1, 2, 3 => 2
// Tags: Array, Math
// Expertise: beginner
// ===

// Solution1:
function average(...items: number[]): number {
  return items.reduce((prev, v) => prev + v) / items.length
}


// test
console.log(average(1, 2, 3)) // => 2
console.log(average(9, 3, 3)) // => 5