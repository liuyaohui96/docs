

## RegExp 原型方法
1. RegExp.prototype.exec()
2. RegExp.prototype.test()
3. RegExp.prototype.toString()

## exec
在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null。


返回的数组虽然是 Array 的实例，但包含两个额外的属性：index 和 input。其中，index 表示匹配项在字符串中的位置，而 input 表示匹配正则表达式的字符串。在数组中，第一项是与整个模式匹配的字符串，其他项是与模式中的捕获组匹配的字符串（如果模式中没有捕获组，则该数组只包含一项。
```js
// 返回包含第一个匹配项信息的数组
// 返回的数组将完全匹配成功的文本作为第一项，将正则括号里匹配成功的作为数组填充到后面
RegExp.prototype.exec(string)

// ===== 例子
var text = "mom and dad and baby";
var pattern = /mom( and dad( and baby)?)?/gi;
var matches = pattern.exec(text);
console.log(matches.index); // 0
console.log(matches.input); // "mom and dad and baby"
console.log(matches[0]); // "mom and dad and baby"
console.log(matches[1]); // " and dad and baby"
console.log(matches[2]); // " and baby" 
```


## test
查看正则表达式与指定的字符串是否匹配

```js
RegExp.prototype.test(string) // return boolean

// === 例子
let str = 'hello world!';
let result = /^hello/.test(str);
console.log(result); // true
```

## toString
返回一个表示该正则表达式的字符串,覆盖了Object.prototype.toString() 方法
```js
RegExp.prototype.toString()

// 例子
let myExp = new RegExp("a+b+c");
console.log(myExp.toString()); // "/a+b+c/"
```