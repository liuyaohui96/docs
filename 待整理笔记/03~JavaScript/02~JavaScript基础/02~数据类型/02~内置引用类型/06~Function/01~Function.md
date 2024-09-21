
## Function
使用Function 构造函数创建一个Function 对象，直接调用此构造函数可以动态创建函数

使用 Function 构造器生成的 Function 对象是在函数创建时解析的，这比使用函数表达式或函数语句声明一个函数并在您的代码中调用它的效率低，因为此类函数会与其余代码一起解析。

```js
new Function ([arg1[, arg2[, ...argN]],] functionBody)

// === 例子
let sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 6)); // 8
```

每个函数都是 Function 类型的实例，而且都与其他引用类型一样具有属性和方法

## 函数的属性和方法
1. 每个函数都包含两个属性：length 和 prototype
2. 每个函数都包含两个非继承而来的方法：apply()和 call()