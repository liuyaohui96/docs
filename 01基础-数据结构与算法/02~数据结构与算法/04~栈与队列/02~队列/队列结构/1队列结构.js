let enQueue = require('./3进队')
let deQueue = require('./4出队')

function Queue() {
  this.items = []

  // 进队
  this.enQueue = enQueue

  // 出队
  this.deQueue = deQueue

  // 是否为空
  this.isEmpty = () => {
    return this.items.length === 0
  }

  // 队列长度
  this.size = () => {
    return this.items.length
  }

  // 打印
  this.print = () => {
    console.log(this.items.toString())
  }
}

module.exports = Queue
