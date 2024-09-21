// ===
// Detail: bubble sort
// Example：Example：[3, 7, 1, 9, 5] => [1, 3, 5, 7, 9]
// Tags: Array, search
// Expertise: beginner
// ===

// Solution1:
// [3, 7, 1, 9, 5]
// for end(length-1) -> 1
// flag
// for i 0 -> end
// if [i]>[i+1] exchange & !flag
// if !flag break
function bubbleSort(arr: number[]): number[] {
  for (let end = arr.length - 1; end > 0; end--) {
    let flag = false
    for (let i = 0; i < end; i++)
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        flag = true
      }

    if (!flag) break
  }

  return arr
}



// test
console.log(bubbleSort([3, 7, 1, 9, 5])) // => [ 1, 3, 5, 7, 9 ]