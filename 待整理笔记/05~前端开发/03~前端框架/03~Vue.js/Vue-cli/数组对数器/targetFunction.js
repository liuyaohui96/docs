// 需要检验的算法

function smallSum(arr) {
  if (arr.length < 2) return 0;

  return smallSumProcess(arr, 0, arr.length - 1);
}

function smallSumProcess(arr, L, R) {
  if (L == R) return 0;

  let mid = Math.floor((L + R) / 2);

  // 左侧和右侧的小和以及merge的小和相加
  return (
    smallSumProcess(arr, L, mid) +
    smallSumProcess(arr, mid + 1, R) +
    merge(arr, L, mid, R)
  );
}

function merge(arr, L, mid, R) {
  let help = [];

  // 左右指针指向左右序列第一个数
  let p1 = L;
  let p2 = mid + 1;

  // help数组下标
  let i = 0;
  // 小和的统计
  let res = 0;
  while (p1 <= mid && p2 <= R) {
    // 如果右边p2指定的数大于左边p1的数，就把(r-mid+1)*arr[p1]加到res中
    res += arr[p1] < arr[p2] ? (R - p2 + 1) * arr[p1] : 0;
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
  }

  while (p1 <= mid) {
    help[i++] = arr[p1++];
  }
  while (p2 <= mid) {
    help[i++] = arr[p2++];
  }

  // 替换数组
  for (let i = 0; i < help.length; i++) {
    arr[L + i] = help[i];
  }

  // 返回当前序列的小和
  return res;
}

module.exports = smallSum;
