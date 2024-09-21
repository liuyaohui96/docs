const Stack = require('./03~01~栈的顺序结构');

let stack = new Stack();
console.log('======= 初始化');
stack.initStack();
console.log(stack);

console.log('======= 进栈');
stack.push(10);
stack.push(20);
stack.printStack(); // 20 10

console.log('======= 出栈');
stack.pop();
stack.printStack(); // 10
