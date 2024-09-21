// ===
// Detail: quickSort
// Example：Example：[3, 7, 1, 9, 5] => [1, 3, 5, 7, 9]
// Tags: sort
// Expertise: Intermediate
// ===

// Solution1:
// [3, 7, 1, 9, 5]
// partition(arr, 0, 4)
// left => 0  right => 4
// pivot = left = 0
// i = left +1
// for i => right
// 1: 7 > 3  => [3, 7, 1, 9, 5]
// 2: 1 < 3 => exchange =>  [3, 1, 7, 9, 5] 
//    i++ => 2
// 3: 9 > 3 
// 4: 5 > 3
// exchange(pivot, i-1) => [1, 3, 7, 9, 5]
// return i-1


function quickSort(arr: number[], left = 0, right = arr.length - 1): number[] {
  // 递归的base case left>right | left==right
  if (left < right) {
    let pivotIdx = partition(arr, left, right)
    quickSort(arr, left, pivotIdx - 1)
    quickSort(arr, pivotIdx + 1, right)
  }

  // 如果是第一层的递归执行到这里，返回排序好的arr
  if (right === arr.length - 1) return arr
}

function partition(arr: number[], left: number, right: number): number {
  // 选择left作为pivot

  // i指定比pivot大的数的序列开始的位置
  let i = left + 1

  for (let j = i; j <= right; j++) {
    // 如果arr[j]比pivot值小
    // 就交换i位置的值
    if (arr[j] < arr[left]) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      // i指定比pivot大的数的序列开始的位置
      i++
    }
    // 对于比arr[j]比pivot值大的跳过
  }

  // i指定比pivot大的数的序列开始的位置
  // 将pivot放到正确的位置
  [arr[left], arr[i - 1]] = [arr[i - 1], arr[left]]
  // 返回pivot的位置
  return i - 1
}




// test
console.log(quickSort([3, 7, 1, 9, 5])) // => [ 1, 3, 5, 7, 9 ]