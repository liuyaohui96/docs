
## 词法作用域标识符注册流程
1. 如果创建函数词法作用域
  - 创建 argument和形参的标识符
  - 扫描函数声明，创建标识符；标识符已经才能在，则重写该标识符的值
  - 扫描var变量声明并初始化为undefined

2. 如果是全局词法作用域
  - 扫描函数声明，创建标识符；标识符已经才能在，则重写该标识符的值
  - 扫描var变量声明并初始化为undefined

3. 如果是块级词法作用域
  - 扫描let, const变量声明并初始化为undefined


## 变量和函数提升
因为作用域在编译阶段（解释阶段）就已经确定了，所以在作用域的任何位置，都可以访问到作用域中的变量，该现象称为变量和函数提升。根据词法作用域标识符注册规则，表现为：
* 函数被优先提升（标识符已经才能在，则重写该标识符的值），函数表达式不会被提升
* 通过var定义的变量，在赋值前可以访问到它的值：undefined
* let关键字和const声明的块级作用域变量虽然也存在变量提升，但并没有进行初始化，在声明（初始化）语句前，它们是不可访问的，试图访问会抛出一个`ReferenceError`，这被称为“暂时性死区”（`TDZ temporal dead zone`）

```js
// 函数提升
sayHi();
function sayHi() {
  // 变量提升
  console.log(name); // undefined
  // 块级变量暂时性死区
  console.log(age); // refreence error
  var name = 'Lydia';
  let age = 21;
}
```
## 验证let是否存在变量提升
```js
// 如果不存在变量提升
// console.log(name)就会输出ConardLi
// 结果却抛出了ReferenceError
let name = 'ConardLi'
{
  console.log(name) // Uncaught ReferenceError: name is not defined
  let name = 'code秘密花园'
}
```

