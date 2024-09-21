// ========= example 1
function fn1() {
  var a = 2;
  function fn2() {
    a++;
    console.log(a);
  }
  return fn2;
}

// 只创建了一个闭包
var f = fn1();
f(); // 3
f(); // 4

// ========== example 2
function showDelay(msg, time) {
  setTimeout(() => {
    console.log(msg);
  }, time);
}
showDelay('liuyaohui', 500);
