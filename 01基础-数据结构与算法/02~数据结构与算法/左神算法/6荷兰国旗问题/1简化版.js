/* 
传入一个数组和num，将小于num的放在左边，大于num的放在右边
解决：用p记录小于区域的末端，p>=-1
p+1是大于区域的头端
*/
function netherlandSolve(arr, num) {
  let p = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num && ++p != i) [arr[p], arr[i]] = [arr[i], arr[p]];
  }
}

let arr = [1, 5, 8, 7, 3, 2];

netherlandSolve(arr, 4);
console.log(arr); // [ 1, 3, 2, 7, 5, 8 ]
