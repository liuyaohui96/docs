
## 剩余参数
剩余参数（rest parameter）语法是`...restParaName`，剩余参数在函数内表现为`数组`
```js
// === 指定对象和对象属性，复制对象属性的函数，使用剩余参数改写如下
function pick(object, ...keys) {
  let result = Object.create(null);

  for (let i = 0, len = keys.length; i < len; i++) {
    result[keys[i]] = object[keys[i]];
  }

  return result;
}
```

剩余参数的限制：
1. 函数只能有一个剩余参数，剩余参数必须被放到最后
2. 剩余参数不能再对象的`setter`属性中使用，因为setter规定只能使用单个参数
```js
// === 剩余参数必须被放到最后
function pick(object, ...keys, last) {
  // SyntaxError: Rest parameter must be last formal parameter
}

// ==== 不能在对象setter属性中使用
let object = {
  // SyntaxError: Setter function argument must not be a rest parameter
  set name(...value) {
      // do something
  }
};
```