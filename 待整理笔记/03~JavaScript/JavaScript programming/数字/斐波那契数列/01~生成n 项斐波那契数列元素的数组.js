// 生成一个包含的 n 项斐波那契数列元素的数组
const fibonacci = n =>
  [...Array(n)].reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : 1),
    []
  );

console.log(fibonacci(5));
