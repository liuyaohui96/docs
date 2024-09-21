console.log([] + []); // ''
console.log([] + {}); // '[object Object]'
console.log(true + true); // 2
console.log(1 + { a: 1 }); // '1[object Object]'

const a = [1, 2, 3];
const b = [1, 2, 3];
const c = '1,2,3';

console.log(a == c); // true
console.log(a == b); // false 比较的是引用

// ====
// 如何让：a == 1 && a == 2 && a == 3
const a = {
  value: [3, 2, 1],
  valueOf: function() {
    return this.value.pop();
  }
};

/*

|| 和 && 可以返回任意类型的值

a || b 
1. 先对a进行toBoolean操作。如果a是真值，返回a，不对b进行计算
2. 如果是假值，返回b

a && b
1. 先对a进行toBoolean操作。如果a是真值，返回b
2. 如果是假值，也返回b
*/
