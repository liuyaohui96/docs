## Boolean 对象
Boolean对象是一个布尔值的对象包装器，可以通过`Boolean()`创建

```js
// 如果省略参数，或者value值是假值, 则对象的值为false，否则对象的值为true
// 假值有：0 -0 NaN "" false undefined null
new Boolean([value])
// 或者
!!value 

// === 不要将boolean对象的值与基础类型boolean值混淆
let x = new Boolean(false);
if (x) {
  // 这里的代码会被执行
}

let y = false;
if(y){
  // 这里的代码不会执行 
}
```


```js
var falseObject = new Boolean(false); 
var falseValue = false; 

var result = falseObject && true;
alert(result); //true 

alert(typeof falseObject); //object
alert(typeof falseValue); //boolean
alert(falseObject instanceof Boolean); //true
alert(falseValue instanceof Boolean); //false
```