// ===
// Detail: chunk
// Example：[1, 2, 3, 4] 2 = [[1, 2], [3, 4]]
// Tags: Array
// Expertise: intermediate
// ===

// Solution1:
// procedure progrmming
function chunk<T>(arr: T[], chunkNum: number): T[] {
  let result = []
  let chunk = 0
  let temp = []
  for (let i = 0; i < arr.length; i++) {
    if (chunk < chunkNum) {
      temp.push(arr[i])
      chunk++
    }
    if (chunk === chunkNum) {
      result.push(temp)
      temp = []
      chunk = 0
    }
  }

  if (chunk) result.push(temp)
  return result
}


function chunk2<T>(arr: T[], chunkNum: number): T[] {
  let result = []
  for (let i = 0; i < Math.ceil(arr.length / chunkNum); i++) {
    result.push(arr.slice(i * chunkNum, i * chunkNum + chunkNum))
  }
  return result
}


// function programming
function chunk3<T>(arr: T[], chunkNum: number): T[][] {
  return Array.from(
    { length: Math.ceil(arr.length / chunkNum) },
    (_, i) => arr.slice(i * chunkNum, i * chunkNum + chunkNum))
}

function chunk4<T>(arr: T[], chunkNum: number): T[][] {
  return [...new Array(Math.ceil(arr.length / chunkNum))]
    .map((_, i) => arr.slice(i * chunkNum, i * chunkNum + chunkNum))
}


// test
console.log(chunk([1, 2, 3, 4], 3))  // => [ [ 1, 2, 3 ], [ 4 ] ]
console.log(chunk2([1, 2, 3, 4], 3)) // => [ [ 1, 2, 3 ], [ 4 ] ]
console.log(chunk3([1, 2, 3, 4], 3)) // => [ [ 1, 2, 3 ], [ 4 ] ]
console.log(chunk4([1, 2, 3, 4], 3)) // => [ [ 1, 2, 3 ], [ 4 ] ]