// ===
// Detail: filter an array by Array items
// Example：[1, 2, 3, 4] [true, false, false, true] => [[1, 4],[2, 3]]
// Tags: Array
// Expertise: beginner
// ===

// Solution1:
// [1, 2, 3, 4] [true, false, false, true]
// result => [[], []]
// index 0 => 1 => filterList[index] => [[1]]
// index 1 => 2 => filterList[index] => [[1], [2]]
// index 2 => 2 => filterList[index] => [1, [2, 3]]
// index 3 => 4 => fileterList[index] => [[1, 4], [2, 3]]
function filterByList(arr: any[], filterList: any[]): any[] {
  let result = [[], []]
  for (let i = 0; i < arr.length; i++) {
    if (filterList[i])
      result[0].push(arr[i])
    else
      result[1].push(arr[i])
  }
  return result
}

// simply
function filterByList2(arr: any[], filterList: any[]): any[] {
  // must iterate arr
  // must has[[], []] initial result arr
  // so use reduce
  return arr
    .reduce((prev, v, idx) => (prev[filterList[idx] ? 0 : 1].push(v), prev)
      , [[], []])
}

// not good
// O(n) = O(map) + O(filter)
function filterByList3(arr: any[], filterList: any[]): any[] {
  return [[], []]
    .map((_, idx) => arr
      .filter((_, filteridx) => idx
        ? !filterList[filteridx]
        : filterList[filteridx])
    )
}


// test
console.log(filterByList([1, 2, 3, 4], [true, false, false, true])) // => [ [ 1, 4 ], [ 2, 3 ] ]
console.log(filterByList2([1, 2, 3, 4], [true, false, false, true])) // => [ [ 1, 4 ], [ 2, 3 ] ]
console.log(filterByList3([1, 2, 3, 4], [true, false, false, true])) // => [ [ 1, 4 ], [ 2, 3 ] ]
