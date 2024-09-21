module.exports = insert = function(index, element) {
  while (index < 0 || index > this.length) return false // 越界

  let node = new this.Node(element)

  let current = this.head
  let previous // 记住前一个位置，方便插入
  let listIdx = 0

  if (index === 0) {
    node.next = current
    this.head = node
  } else {
    while (listIdx < index) {
      previous = current
      current = current.next
      listIdx++
    }
    previous.next = node
    node.next = current
  }
  this.length++
  return true
}
