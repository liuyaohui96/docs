// ===
// Detail: sectct sort an array
// Example：[3, 7, 1, 9, 5] => [1, 3, 5, 7, 9]
// Tags: Array, sort
// Expertise: beginner
// ===

// Solution1:
// [3, 7, 1, 9, 5]
// for i 0 -> length-2
// min = i
// for j=i+1 -> length-1
// [min]> [j]  min =j
// end j loop
// min != i => exchange
function selectSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j
    }
    if (min !== i) [arr[min], arr[i]] = [arr[i], arr[min]]
  }

  return arr
}


// test
console.log(selectSort([3, 7, 1, 9, 5])) // => [ 1, 3, 5, 7, 9 ]
