// ===
// Detail: convert to array
// Example：'foo' => ['foo']   ['foo'] => ['foo']
// Tags: contert, Array
// Expertise: beginner
// ===

// Solution1:
function convertToArr(source: any): any[] {
  return Array.isArray(source) ? source : [source]
}


// test
console.log(convertToArr('foo')) // => [ 'foo' ]
console.log(convertToArr(['foo'])) // => [ 'foo' ]