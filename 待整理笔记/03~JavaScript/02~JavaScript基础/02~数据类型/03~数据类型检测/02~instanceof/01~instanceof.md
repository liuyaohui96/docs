
## instanceof
instanceof 用于判断对象是否为某个构造函数的实例。即**检查左边对象的原型链是否有右边构造函数的原型对象**。运算符的左边是实例对象，右边是构造函数。它会检查右边构建函数的原型对象（prototype），是否在左边对象的原型链上。

instanceof 三大弊端：
* 对于基本数据类型来说，字面量方式创建出来的结果和实例方式创建的值判断是不一样的
    ```js
    console.log(1 instanceof Number)//false
    console.log(new Number(1) instanceof Number)//true
    ```

* 只要在当前实例的原型链上，检测出来的结果都是true。在类的原型继承中，我们最后检测出来的结果未必准确。
    ```js
    let arr = [1, 2, 3];
    console.log(arr instanceof Array) // true
    console.log(arr instanceof Object);  // true
    function fn(){}
    console.log(fn instanceof Function)// true
    console.log(fn instanceof Object)// true
    ```

* 不能检测null