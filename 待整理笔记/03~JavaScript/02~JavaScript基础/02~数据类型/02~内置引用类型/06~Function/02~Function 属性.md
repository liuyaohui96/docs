
## Function 属性
1. Function.caller
2. Function.name
3. Function.length


## caller
如果一个函数f是在全局作用域内被调用的,则f.caller为null,相反,如果一个函数是在另外一个函数作用域内被调用的,则f.caller指向调用它的那个函数
```js
function myFunc() {
   if (myFunc.caller == null) {
      return ("该函数在全局作用域内被调用!");
   } else
      return ("调用我的是函数是" + myFunc.caller);
}
```

## length
指明函数的形参个数
```js
function func1() {}
function func2(a, b) {}
console.log(func1.length); // 0
console.log(func2.length); // 2
```

## name
返回函数实例的名称
```js
// 函数声明的名称
function doSomething() { }
doSomething.name;  // "doSomething" 

// 构造函数的名称   
(new Function).name; // "anonymous"

// 对象方法的名称
var object = {
  someMethod: function() {}
};
console.log(object.someMethod.name); // "someMethod"

// 简写方法的名称
var o = {
  foo(){}
};
o.foo.name; // "foo";

// bind 绑定函数的名称
function foo() {}; 
foo.bind({}).name; // "bound foo"

// getter & setter 名称
var o = { 
  get foo(){}, 
  set foo(x){} 
}; 

var descriptor = Object.getOwnPropertyDescriptor(o, "foo"); 
descriptor.get.name; // "get foo" 
descriptor.set.name; // "set foo";
```