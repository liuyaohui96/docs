// 根据设置的断点分析

var a = 10;
var bar = function(x) {
  var b = 5;
  foo(x + b);
};

var foo = function(y) {
  var c = 5;
  console.log(a + c + y);
};

bar(10);

// =========================
console.log('global begin ' + i);
var i = 1;
foo(1);

function foo(i) {
  if (i == 4) return;
  console.log('foo begin ' + i);
  foo(i + 1);
  console.log('foo end ' + i);
}
console.log('global begin ' + i);
/**
 * global begin undefined
 * foo begin 1
 * foo begin 2
 * foo begin 3
 * foo end 3
 * foo end 2
 * foo end 1
 * global end 1
 */

// =========================
function a3() {}
var a3;
console.log(typeof a3); // function

function b3() {}
var b3 = 3; // 赋值
console.log(typeof b3); // number

// =========================
var c = 1;
function c(c) {
  console.log(c);
  var c = 3;
}
c(2); // c is not a function

// =========================
// =========================
