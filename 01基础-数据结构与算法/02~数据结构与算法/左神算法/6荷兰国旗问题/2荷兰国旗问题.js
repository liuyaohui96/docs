/*
传入一个数组和num，将小于num的放在左边，大于num的放在右边，等于num的放在中间
解决： 用less 标记小于区域末端，more标记大于区域右端，less>=-1, more<=arr.length

实际上有四个区域
小于区域
等于区域
待定区域
大于区域
*/

function netherlandSolve(arr, num) {
  let less = -1;
  more = arr.length;

  /* 
  i++只有小于区域交换才发生，所以使用while控制
  */
  let i = 0;
  while (i < more) {
    if (arr[i] < num && ++less != i) {
      [arr[less], arr[i]] = [arr[i], arr[less]];
      i++;
    }
    // 不需要移动i位置
    else if (arr[i] > num) {
      --more;
      [arr[more], arr[i]] = [arr[i], arr[more]];
    } else {
      i++;
    }
  }
}

let arr = [40, 39, 85, 87, 42, 86, 66, 65, 43];

netherlandSolve(arr, 43);
console.log(arr); // [ 1, 3, 2, 7, 5, 8 ]
