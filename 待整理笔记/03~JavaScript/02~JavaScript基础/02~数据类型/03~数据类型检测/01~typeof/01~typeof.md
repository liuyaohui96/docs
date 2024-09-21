
## typeof 
typefof 可以判断除了null外的所有基本数据类型, 不能判断对象类型,可以用来判断函数类型

typeof得到的值可能是：
* null外的所有基本数据类型返回其基本类型的字符串表示
* null基本类型返回'object'
* function类型返回'function'
* 所有对象返回'object'
* typeof typeof 任何变量或值 返回'string'
```JS
typeof ''; // string 有效
typeof 1; // number 有效
typeof true; //boolean 有效
typeof undefined; //undefined 有效
typeof null; //object 无效
typeof Symbol(); // symbol 有效

typeof new Function(); // function 有效

typeof [] ; //object 无效
typeof new Date(); //object 无效
typeof new RegExp(); //object 无效

// === 注意
typeof null; // 'object'
typeof [] // "object"
typeof {} // "object"

// 判断不出基本包装类型
typeof Number // "function"
typeof Boolean // "function"
typeof String // "function"

// typeof 0 计算得到字符串 "number"，
// 因此 typeof "number" 计算得到 "string".
typeof typeof 0

typeof Number(3) // 'number'
typeof new Number(3) // 'object'
```
