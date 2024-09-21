## call
```js
fun.call(thisArg, arg1, arg2, ...)

// === 使用 call 方法调用父构造函数
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}
```