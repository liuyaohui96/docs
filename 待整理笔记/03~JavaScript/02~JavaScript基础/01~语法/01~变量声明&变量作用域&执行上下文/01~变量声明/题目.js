// === if块中的foo已经在词法环境中被创建了，但是if块里的foo还依旧在暂存死区里，
// foo还没有到达它的初始化的部分就被引用了。
function test() {
  var foo = 33;
  {
    let foo = foo + 55; // ReferenceError
  }
}
test();

// ===
var num = 10;
var num = 20;
console.log(num); // 20

// ===
let numbers = [1, 2, 3];
numbers[10] = 1;
numbers; // [ 1, 2, 3, <7 empty items>, 1 ]
