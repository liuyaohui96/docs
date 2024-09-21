## CommonJS 规范出现的原因
JavaScript 缺少这些功能:
1. 没有模块系统（ES6前）
2. 没有标准库(如没有文件系统的 API，没有 IO 流 API )
3. 有标准接口（没有如 Web Server 或者数据库的统一接口）
4. 没有包管理系统。不能自动加载和安装依赖

于是便有了 CommonJS规范

## 简单模块定义和使用
```js
// circle.js
var PI = Math.PI;
exports.area = function (r) {
    return PI * r * r;
};

// app.js
var circle = require('./circle.js');
console.log( 'The area of a circle of radius 4 is ' + circle.area(4));
```

## 模块载入策略
Node.js模块分为两类
1. 原生（核心）模块
2. 文件模块。文件模块中，又分为 3 类模块
  * .js。通过 fs 模块同步读取 js 文件并编译执行
  * .node。通过 C/C++ 进行编写的 Addon。通过 dlopen 方法进行加载。
  * .json。读取文件，调用 JSON.parse 解析加载。

> 模块的加载速度对比：原生模块在**源代码编译的时候编译进了二进制执行文件**，加载的速度最快，文件模块是动态加载的，加载速度比原生模块慢。原生模块都被定义在 lib 这个目录下面，文件模块则不定性。
> 模块缓存：Node.js 对原生模块和文件模块都进行了缓存，于是在第二次 require 时，是不会有重复开销的。


js 后缀的编译过程为以下详细过程
```js
(function (exports, require, module, __filename, __dirname) {
    var circle = require('./circle.js');
    console.log('The area of a circle of radius 4 is ' + circle.area(4));
});
/*
vm 原生模块的 runInThisContext 方法执行,返回为一个具体的 function 对象。最后传入 module 对象的 exports，require 方法，module，文件名，目录名作为实参并执行。

这就是为什么 require 并没有定义在 app.js 文件中，但是这个方法却存在的原因

module 变量是这个模块对象自身，exports 是在 module 的构造函数中初始化的一个空对象（{}，而不是 null）
*/
```

## require 方法中的文件查找策略
![require 方法中的文件查找策略](images/require文件查找策略.jpg)

1. 从文件模块缓存中加载
2. 从文件模块缓存中加载。从文件模块缓存中加载。原生模块也有一个缓存区，同样也是优先从缓存区加载。如果缓存区没有被加载过，则调用原生模块的加载方式进行加载和执行
3. 从文件加载。文件模块缓存中不存在，而且不是原生模块的时候，从文件系统中加载实际的文件

讲述文件加载策略之前，首先讲述一下module path
```js
// modulepath.js 
console.log(module.paths);

/*
[ '/home/jackson/research/node_modules',
'/home/jackson/node_modules',
'/home/node_modules',
'/node_modules' ]
*/
```
看出 module path 的生成规则为：从当前文件目录开始查找 node_modules 目录；然后依次进入父目录，查找父目录下的 node_modules 目录；依次迭代，直到根目录下的 node_modules 目录

整个文件查找流程如下图
![文件查找流程](images/文件查找流程.jpg)

流程如下
1. module path 数组中取出第一个目录作为查找基准
2. 直接从目录中查找该文件，如果存在，则结束查找。如果不存在，则进行下一条查找。
3. 尝试添加.js、.json、.node 后缀后查找，如果存在文件，则结束查找。如果不存在，则进行下一条。
4. 尝试将 require 的参数作为一个包来进行查找，读取目录下的 package.json 文件，取得 main 参数指定的文件。查找该文件，如果存在，则结束查找。如果不存在，则进行第 3 条查找
5. 如果继续失败，则取出 module path 数组中的下一个目录作为基准查找，循环第 1 至 4个步骤
6. 最终失败，则抛出异常


## 包结构
符合 CommonJS 规范的包应该是如下这种结构：
* 一个 package.json 文件应该存在于包顶级目录下
* 二进制文件应该包含在 bin 目录下。
* JavaScript 代码应该包含在 lib 目录下。
* 文档应该在 doc 目录下。
* 单元测试应该在 test 目录下。

CommonJS 为 package.json 文件定义了如下一些必须的字段：

* name。包名，需要在 NPM 上是唯一的。不能带有空格。
* description。包简介
* version。版本号，通常为 x.y.z
* keywords。关键字数组。用于 NPM 中的分类搜索
* maintainers。包维护者的数组。数组元素是一个包含 name、email、web 三个属性的 JSON 对象。
* contributors。包贡献者的数组。第一个就是包的作者本人，格式包含 name 和 email
* bugs。一个可以提交 bug 的 URL 地址
* licenses。包所使用的许可证。
* repositories。托管源代码的地址数组。
* dependencies。当前包需要的依赖。