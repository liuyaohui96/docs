// ===
// Detail: divide item in array
// Example：[1, 2, 3, 4] 1 => [[1], [2], [3], [4]]
//   [1, 2, 3, 4] 2 => [[1, 2], [2, 3], [3, 4]
//   [1, 2, 3, 4] 3 => [[1, 2, 3], [2, 3, 4]]
//   [1, 2, 3, 4] 4 => [[1, 2, 3, 4]]
//   [1, 2, 3, 4] 5 => []
// Tags: Array
// Expertise: intermidate
// ===

// Solution1:
// for arr.length = 4
// if subArrayLen =4,  has 1 subArray
// if subArrayLen =3, has 2 subArray
// so, the number of subArray = arr.length - subArrayLen + 1
function divideArray(arr: any[], subArrayLen: number): any[] {
  return arr.length < subArrayLen
    ? []
    // use [...Array(length).keys()], like range() to loop
    // creating a dense array so that Array.prototype.map
    // can use
    : [...new Array(arr.length - subArrayLen + 1).keys()]
      .map((v, i) => arr.slice(i, i + subArrayLen))
}

// use Array. from
function divideArray2(arr: any[], subArrayLen: number): any[] {
  return arr.length < subArrayLen
    ? []
    : Array.from({ length: arr.length - subArrayLen + 1 },
      (_, i) => arr.slice(i, i + subArrayLen))
}


// test
console.log(divideArray([1, 2, 3, 4], 2)) // => [ [ 1, 2 ], [ 2, 3 ], [ 3, 4 ] ]
console.log(divideArray([1, 2, 3, 4], 3)) // => [ [ 1, 2, 3 ], [ 2, 3, 4 ] ]
console.log(divideArray([1, 2, 3, 4], 5)) // => []

console.log(divideArray2([1, 2, 3, 4], 2)) // => [ [ 1, 2 ], [ 2, 3 ], [ 3, 4 ] ]
console.log(divideArray2([1, 2, 3, 4], 3)) // => [ [ 1, 2, 3 ], [ 2, 3, 4 ] ]
console.log(divideArray2([1, 2, 3, 4], 5)) // => []