
## apply 与 call 的区别与用途
区别：
1. 参数形式不同：apply 第二个参数是数组；call第二个参数后，每个参数依次传入
2. javascr 内部参数使用类数组表示，这个意思上，apply 比 call 更有效率
3. call 实际上是 apply 的语法糖。如果明确知道函数接受多少个参数，可以使用call


用途：
1. 改变this指向。如事件处理程序中的内部函数调用，this通常指向window而不是事件对象，可以使用 apply | call 修正this的指向

2. 原生bind的实现。参考

3. 借用其他对象的方法。
    * 例如借用构造方法，实现继承
    * 例如类数组向Array.prototype 借用方法



