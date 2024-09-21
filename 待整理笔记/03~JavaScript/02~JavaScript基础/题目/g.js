(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
// 1 undefined 2
// catch块接收参数x。当我们传递参数时，这与变量的x不同
