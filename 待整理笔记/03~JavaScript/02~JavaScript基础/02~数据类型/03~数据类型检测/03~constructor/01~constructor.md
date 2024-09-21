
## constructor
使用值的constructor属性，可以得到值的构造函数。可以检测:
* 除了null和undefined的基本数据类型，因为number, string, boolean都可以转换为响应包装类型，基本类型值有构造函数`Symbol()`构造
* 任何对象类型


```js
// 可检测除了null和undefined的基本数据类型
console.log((1).constructor===Number);//true
console.log(null.constructor) // TypeError

// 可检测任何对象类型
let aa=[1,2];
console.log(aa.constructor===Array);//true
console.log(aa.constructor===RegExp);//false
```

## constructor属性检测数据类型的弊端
* 不能检测null和undefined
* constructor 属性易变，不可信赖。把类的原型进行重写，在重写的过程中很有可能出现把之前的constructor给覆盖了，这样检测出来的结果就是不准确的。所以在重写对象原型时一般都需要重新给constructor赋值，以保证实例对象的类型不被改写
    ```js
    function Fn(){}
    Fn.prototype = new Array()
    var f = new Fn
    // costructor 属性被覆盖
    console.log(f.constructor)//Array
    ```