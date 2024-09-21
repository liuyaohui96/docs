let Queue = require('./1队列结构')

let queue = new Queue()
queue.enQueue(10)
queue.enQueue(20)
queue.enQueue(30)
queue.print() // 10,20,30
queue.deQueue()
queue.print() // 20,30
console.log(queue.isEmpty()) // false
console.log(queue.size()) // 2
