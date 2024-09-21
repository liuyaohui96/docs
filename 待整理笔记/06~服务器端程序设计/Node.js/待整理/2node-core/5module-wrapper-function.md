我的总结
1. node不是直接执行，而是包含在一个函数内，叫做`module wrapper function`, 大概是这样的
    ```JavaScript
    (function (exports, require, module, __filename, __dirname){
        // JavaScript code here
    })
    ```
    所以我们可以在module内使用exports, require, module, __filename, __dirname这些参数
2. 举例
    ```JavaScript
    module.exports=log;
    exports=log; // can do this, exports is referennce to module.exports
    // we can not change the reference

    // ----------------
    module.exports.log=log;
    // 相当于
    exports.log=log;

    __filename // module路径
    __dirname // 包含module的路径
    ```

# 原文
node does not execute this code idrectly, it it inside of a function, our code is going to
converted to something like this
```JavaScript
(function(exports, require, module, __filename, __dirname){
    // our code
})
```
, so we have this function declaration, node does not execute our code directly,

it alwarys wraps thd code inside each module

in mary module, `exports, require, module, __filename, __dirname` are arguments that 
is passed to this module


