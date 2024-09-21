let count = 0;
function Parent(property) {
  this.property = property;
  console.log(`调用次数${++count}`); // 测试父类构造函数被调用的次数
}
Parent.prototype.bar = function() {
  console.log('bar');
};
function Child(property) {
  // 借用父类构造函数构造实例，避免子类共享父类的引用类型引发的问题
  // 可以向父类传参
  // 可以对多个类调用call实现多继承
  Parent.call(this, property);
}
Child.prototype = Object.create(Parent.prototype); // 可以使用父类实例的方法和属性，以及父类实例原型对象及其原型链上的方法和属性
Child.prototype.constructor = Child; // 修复重新指定prototype后prototype对象的constructor的属性
let child = new Child('foo');

console.log(child.property); // 'foo'
child.bar(); // 'bar'
