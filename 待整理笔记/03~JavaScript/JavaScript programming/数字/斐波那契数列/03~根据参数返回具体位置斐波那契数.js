// ========== 根据参数返回具体位置fabonacci 数
/**
 *@desc: fibonacci
 *@param: count {Number}
 *@return: result {Number} 第count个fibonacci值，计数从0开始
  fibonacci数列为：[1, 1, 2, 3, 5, 8, 13, 21, 34 …]
  则getNthFibonacci(0)返回值为1
  则getNthFibonacci(4)返回值为5
 */

function getNthFibonacci(count) {
  const arr = createFibonacci(count + 1);
  return arr[count];
}

function createFibonacci(count) {
  return [...Array(count)].reduce(
    (prev, next, index) =>
      prev.concat(index > 1 ? prev[index - 1] + prev[index - 2] : 1),
    []
  );
}

console.log(getNthFibonacci(0));
console.log(getNthFibonacci(4));
