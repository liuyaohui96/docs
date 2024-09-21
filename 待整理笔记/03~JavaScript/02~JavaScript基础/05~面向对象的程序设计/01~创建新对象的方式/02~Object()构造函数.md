
## Object() 构造函数
使用Object()构造函数来创建一个空的对象
```js
new Object([{ [ nameValuePair1[, nameValuePair2[, ...nameValuePairN] ] ] }])

// === 例子
let person = new Object();
person.name = 'liuyaohui';
person.greeting = function() {
  console.log('Hi!' + this.name);
}

// 也可以传递对象参数
let person = new Object({
    name: 'liuyaohui',
    greeting(){
        console.log('Hi! '+this.name);
    }
});
```