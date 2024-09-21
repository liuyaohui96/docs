
## Symbol.hasInstance
每个函数都具有一个`Symbol.hasInstance`属性，用于判断指定对象是否为本函数的一个实例，这个方法定义在`Function.prototype`上，因此所有函数都继承了`instanceof`运算符的默认行为。

`Symbol.hasInstance`属性是不可写入，不可配置，不可枚举的属性，所以不会被错误地重写

```js
obj instanceof Array;

//  相等于调用Symbol.hasInstance方法
Array[Symbol.hasInstance](obj);
```

## 重写Symbol.hasInstance返回false
假如定义一个函数，使得任意对象都不会判断为该函数的实例，可以编写该函数的`Symbol.hasInstance`方法返回false
```js
function MyObject() {
  // ...
}
// 要重写一个不可写入的属性，必须使用Object.defineProperty()
Object.defineProperty(MyObject, Symbol.hasInstance, {
  value: function(v) {
    return false;
  }
});
let obj = new MyObject();
console.log(obj instanceof MyObject); // false
```

## 重写Symbol.hasInstance 根据条件判断实例
```js
function SpecialNumber() {
  // empty
}
//  要重写一个不可写入的属性，必须使用Object.defineProperty()
Object.defineProperty(SpecialNumber, Symbol.hasInstance, {
  value: function(v) {
    return v instanceof Number && (v >= 1 && v <= 100);
  }
});
let two = new Number(2);
let zero = new Number(0);

console.log(two instanceof SpecialNumber); // true
console.log(zero instanceof SpecialNumber); // false
```

对于重写`Symbol.hasInstance`的建议：最好不要重写内置函数`Symbol.hasInstance`, 这使得代码变得难于预测；对于自定义函数，仅在必要的时候重写