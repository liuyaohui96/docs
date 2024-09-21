/* 
A: [3, 4, 5, 6, 7]
B: [8, 6, 3 ,5, 2, 9] 
*/
const A = [3, 4, 5, 6, 7];
const B = [8, 6, 3, 5, 2, 9];

function findBNotinA(A, B) {
  let rt = [];
  for (let i = 0; i < B.length; i++) {
    if (!erfenSerach(A, B[i])) rt.push(B[i]);
  }
  return rt;
}

function erfenSerach(arr, target) {
  let rt = false;
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (mid > start) {
    if (arr[mid] > target) {
      end = mid;
    } else if (arr[mid] < target) {
      start = mid;
    } else {
      rt = true;
      break;
    }
    mid = Math.floor((start + end) / 2);
  }
  return rt;
}
console.log(findBNotinA(A, B));
