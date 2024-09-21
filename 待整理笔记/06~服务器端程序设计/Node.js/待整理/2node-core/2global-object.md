我的总结
1. node 的运行环境与浏览器不一样，node没有`window`对象，但是有一个`global`对象代替
    ```JavaScript
    setTimeout();
    // 相当于
    global.setTimeout();

    ```
2. 特殊的，在文件中自定义的变量，并不能使用global访问，因为它属于本文件，而不是global
    ```JavaScript
    let name='liuyaohiu';
    global.name; // undefined
    // name在这里不是在global定义，而是在本文件定义
    ```

# 原文
we dont't not have the window object in node, instead we have another object called `global`

of course it's easier to use the shorthand instead of prefix in them with this global

```JavaScript
setTimeout();
// 相当于
global.setTimeout();

let name='liuyaohiu';
global.name; // undefined
```
name在这里不是在global定义，而是在本文件定义