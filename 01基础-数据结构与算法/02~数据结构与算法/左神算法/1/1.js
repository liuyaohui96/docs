/* 
A: [3, 4, 5, 6, 7]
B: [8, 6, 3 ,5, 2, 9] 
*/
const A = [3, 4, 5, 6, 7];
const B = [8, 6, 3, 5, 2, 9];

function findBNotinA(A, B) {
  let result = [];
  for (let i = 0; i < B.length; i++) {
    let flag = false; // 默认是没找到的
    for (let j = 0; j < A.length; j++) {
      if (B[i] == A[j]) {
        flag = true;
        break;
      }
    }
    if (!flag) result.push(B[i]);
  }
  return result;
}

// 比较javascript 的方式

function findBNotinAJS(A, B) {
  let result = [];
  B.forEach(item => {
    if (!A.some(x => x == item)) {
      result.push(item);
    }
  });
  return result;
}

// findBNotinA(A, B);
console.log(findBNotinA(A, B));
console.log(findBNotinAJS(A, B));
