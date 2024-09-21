// ===
// Detail: capitalize every world
// Example：'hello world' => 'Hello World'
// Tags: String
// Expertise: beginner
// ===

// Solution1:
function capitalizeEveryWord(str: string): string {
  return str.replace(/\b\w/g, (str) => str.toUpperCase())
}



// test
console.log(capitalizeEveryWord('hello world')) // => Hello World