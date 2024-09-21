
## getter 与 setter
1. getter: 访问特定属性时调用的函数
2. setter: 设置特定属性时调用的函数


## 定义getter 与 setter
1. 使用对象初始化器定义
  ```js
  // 对象初始化器
  {get prop() { ... } }
  {get [expression]() { ... } } // ES6可计算属性
  {set prop() { ... } }
  {set [expression]() { ... } } // ES6可计算属性
  // === 例子
  let o = {
    a: 7,
    get b() {
      return this.a + 1;
    },
    set c(x) {
      this.a = x / 2;
    }
  };

  console.log(o.a); // 7
  console.log(o.b); // 8
  o.c = 50;
  console.log(o.a); // 25
  ```
2. 使用`Object.defineProperties`方法对一个已创建的对象在任何时候添加getter或setter方法
  ```js
  let o = { a:0 }

  Object.defineProperties(o, {
      "b": { get: function () { return this.a + 1; } },
      "c": { set: function (x) { this.a = x / 2; } }
  });

  o.c = 10 // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
  console.log(o.b) // Runs the getter, which yields a + 1 or 6
  ```

两者的主要区别在于定义getter和setter的时期，第一种方法在对象创建时，第二种方法是对象创建之后