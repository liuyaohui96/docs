let LinkedList = require('./1链表结构')
let list = new LinkedList()

console.log('------------增加元素')
list.append(10)
list.append(20)
list.print() // 10 20

console.log('------------插入元素')
list.insert(2, 7)
list.print() // 10 20 7

console.log('------------根据index删除')
list.removeAt(1)
list.print() // 10 7

console.log('------------返回位置')
console.log(list.indexOf(7))

console.log('------------根据值删除')
list.remove(7)
list.print() // 10

console.log('------------长度')
console.log(list.size()) // 1

console.log('------------是否为空')
console.log(list.isEmpty()) // false
list.removeAt(0)
console.log(list.isEmpty()) // true
