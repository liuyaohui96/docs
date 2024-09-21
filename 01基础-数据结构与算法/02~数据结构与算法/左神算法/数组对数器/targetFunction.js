/* 
经典快速排序，以最后的位置作为 荷兰国旗问题的num，递归进行荷兰国旗问题（即分组），
最终实现排序

特殊的，more的位置定位在R的位置，因为R作为比较值不能被替换

经典快速排序是O(n*logn) - O(n^2)时间复杂度
随机快速排序时间复杂度的长期期望是O(nlog^n)
*/

function quickSort(arr, L, R) {
  if (L < R) {
    // 产生一个随机值
    let randomIdx = L + Math.floor(Math.random(R - L + 1));
    // 交换R位置与随机位置的值
    [arr[randomIdx], arr[R]] = [arr[R], arr[randomIdx]];

    // 返回等于区域的下标数组，p[0]是等于区域开始位置，p[1]是等于区域结束位置
    let p = partition(arr, L, R);
    // 递归等于区域左边
    quickSort(arr, L, p[0]);
    quickSort(arr, p[1], R);
  }
}

// 荷兰国旗分组
function partition(arr, L, R) {
  // 以R位置的值作为分组值
  let less = L - 1;
  // 与荷兰国旗不同，这里more在R位置，因为不能这个比较直不能被替换
  let more = R;
  while (L < more) {
    /* if (arr[L] < arr[R]) {
      less++;
      [arr[less], arr[L]] = [arr[L], arr[less]];
      L++;
    }  */

    // 如果满足arr[L] < arr[R]但是less++的位置就是L,与等于相同的处理----> L++
    if (arr[L] < arr[R] && ++less != L) {
      [arr[less], arr[L]] = [arr[L], arr[less]];
    } else if (arr[L] > arr[R]) {
      --more;
      [arr[more], arr[L]] = [arr[L], arr[more]];
    } else {
      L++;
    }
  }
  // 将more与R进行交换，真正的more为more+1
  [arr[more], arr[R]] = [arr[R], arr[more]];
  return [less, more + 1];
}
module.exports = quickSort;
