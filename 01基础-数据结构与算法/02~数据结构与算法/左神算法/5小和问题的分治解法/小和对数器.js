/* 
用很简单的循环迭代计算
*/
function smallSum(arr) {
  let rt = [];
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j]) rt.push(arr[j]);
    }
  }
  return rt.reduce((x, y) => x + y, 0);
}

let arr = [1, 2, 3, 4];
console.log(smallSum(arr));
