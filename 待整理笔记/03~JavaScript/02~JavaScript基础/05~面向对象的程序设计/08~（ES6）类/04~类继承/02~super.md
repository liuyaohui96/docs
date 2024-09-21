
## super
如果派生类（子类）指定了构造器，则必须使用`super`，否则就会造成错误，如果不使用构造器，则`super()`会被自动调用，并且会使用创建新实例时所有的参数。

使用super()，需要注意以下几点：
1. 只能在派生类（子类）中使用super()
2. 构造器中，必须在访问this之前调用super()，由于super赋值初始化this，在此之前试图访问this，都会造成错误
3. 唯一避免调用super()的办法，就是从类构造器上返回一个对象

```js
class Square extends Rectangle {
  // no constructor
}

// === 相当于
class Square extends Rectangle {
  constructor(...args) {
    // 默认情况下，按照派生类提供的参数传递给基类的构造器
    super(...args);
  }
}
```

