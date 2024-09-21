let append = require('./2向链表尾部追加元素')
let print = require('./3输出链表')
let insert = require('./4在任意位置插入元素')
let removeAt = require('./5从链表中移除元素')
let indexOf = require('./6返回元素的位置')
let remove = require('./7根据元素值删除元素')

function LinkedList() {
  this.head = null
  this.length = 0 // 统计链表长度

  this.Node = function(element) {
    this.element = element
    this.next = null
  }

  // 向列表尾部添加一个新的项
  this.append = append
  // 输出链表
  this.print = print

  // 向列表的特定位置插入一个新的项
  this.insert = insert

  // 移除特定位置的项
  this.removeAt = removeAt
  // 返回元素的索引
  this.indexOf = indexOf
  // 从列表移除一个项,需要借助indexOf和removeAt
  this.remove = remove

  // 判断是否为空
  this.isEmpty = () => this.length === 0
  // 返回大小
  this.size = () => this.length
}

module.exports = LinkedList
