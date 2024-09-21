// ===
// Detail: binary search an sorted array
// Example：[1, 3, 5, 7, 9] 3 => 1
// Tags: Array, search
// Expertise: beginner
// ===

// Solution1:
// [1, 3, 5, 7, 9]
// start = 0; end =length-1=> 4; mid=(start+end)/2 = 2
// [1, 3, 5, 7]
// start = 0; end= length-1=> 3; mid=(start+end)/2 = 1.5 => 1
// in [1, 3, 5, 7, 9]
// if target>[mid] start = mid +1
// if target<[mid]  end = mid -1
// target == [mid]return mid
// e.g  find 2
// start mid = 2 ①
// [mid]>2 => end = 1
// [mid]<2 => start = 1
// so
// to end the search is start == end

function binarySearch(arr: number[], target: number): number | undefined {
  let start = 0
  let end = arr.length - 1
  let mid = Math.floor((start + end) / 2)

  while (start != end) {
    if (arr[mid] === target) return mid
    if (arr[mid] < target) start = mid + 1
    if (arr[mid] > target) end = mid - 1
    mid = Math.floor((start + end) / 2)
  }

  return undefined
}


// test
console.log(binarySearch([1, 3, 5, 7, 9], 2)) // undefined
console.log(binarySearch([1, 3, 5, 7, 9], 7)) // 3