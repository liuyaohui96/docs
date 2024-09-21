// ========================== 箭头函数的this绑定
var radius = 7;
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

console.log(shape.diameter()); // 20
console.log(shape.perimeter()); // NaN 浏览器上市访问window下的radius

// ==================== 全局作用域函数调用
var name = 'window';

var object = {
  name: 'object',
  getName() {
    return function() {
      return this.name;
    };
  }
};
// 因为 object.getName()返回一个函数，函数的调用是在全局作用域内调用
object.getName()(); // 浏览器中结果是 window
// =============== 变形
var name2 = 'window';

var object2 = {
  name2: 'object',
  getName() {
    var that = this;
    return function() {
      return that.name2;
    };
  }
};
object2.getName()(); // object
