/*
一个二维数组，从上到下递增，从左到右递增
输入一个二维数组（长度一致）和整数，判断该二维数组是否有该整数
举例：
1 2 3
4 5 6
7 8 9
*/

// 从二维数组的右上角或者左下角开始找
function find(arr, num) {
  if (!arr.length || !num) return false

  let len = arr.length // 一维数组长度
  let len2 = arr[0].length // 二维数组长度
  // 右上角开始
  let j = len2 - 1
  let i = 0
  while (j >= 0 && i < len) {
    console.log(arr[i][j]) // 输出当前查找的值
    if (arr[i][j] == num) return true // 相等则存在
    if (arr[i][j] > num) j--
    // 大于，则剔除一列
    else i++ // 小于则剔除一行
  }

  return false
}

console.log(find([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 9))
