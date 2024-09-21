const Stack = require('./1栈结构')

// 新建栈
const stack = new Stack()
console.log(stack.isEmpty()) // true

stack.push(10)
stack.push(20)
stack.print() // 10, 20

stack.pop()
stack.print() // 10

stack.clear()
console.log(stack.isEmpty()) // true
