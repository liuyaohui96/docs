我的总结
1. 浏览器内，JS engine 将 JS code 转换为machine code
2. 将chrome 的 v8 js engine 潜入到一个C++环境中，这个程序我们叫做node
3. Nooe是一个runtime environment for JavaScript code, 它提供的V8 engine可以执行JS code， 但是也有一些我们提供的环境对象，这是浏览器里不存在的。
    ```JavaScript
    // work with the file system listen for request and a given port
    fs.readFile();
    http.createServer();
    ```
4. node 不是编程语言，也不是libraries

# 原文
JS code use js engine to take our JavaScript, convert them into machine code

brian Dahl the creator of node came up with a briliiant idea, he thought it would be greate to excute JavaScript out of browser.

So he took Google v8 engine, and embedded it inside a C++ program and called that program node

so node is a runtime environment for JavaScript code, it contains a javascript engine that can excute our JavaScript code, but is also has certain objects that provide an environment for our javascript code, but these objects are different from the environment objects we have in browser.

i.e we don't have the `document` object, instead, we have other object that ive use mroe interesting capabilities for. 

```

```
we can work with the file system or the network and so on

both chrome and node share the javascript engine, but they provide different engine 


note
* node is not to compare to c#(it is not a program language)
* node is not to compare to asp.net(it is a framework)