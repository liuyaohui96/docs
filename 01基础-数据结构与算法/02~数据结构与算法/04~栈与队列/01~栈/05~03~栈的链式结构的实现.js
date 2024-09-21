const LinkStack = require('./05~02~栈的链式存储结构');

let linkStack = new LinkStack();

console.log('====== 初始化');
linkStack.initStack();
console.log(linkStack);

console.log('====== 进栈');
linkStack.push(10);
linkStack.push(20);
linkStack.printLinkStack(); // 20 10

console.log('====== 进栈');
linkStack.pop();
linkStack.printLinkStack(); // 10
