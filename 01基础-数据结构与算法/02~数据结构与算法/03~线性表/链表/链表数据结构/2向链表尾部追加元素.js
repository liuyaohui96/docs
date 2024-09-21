function append(element) {
  let node = new this.Node(element) // 新建一个node
  if (this.head === null) this.head = node
  else {
    let current = this.head
    while (current.next) current = current.next
    current.next = node
  }
  this.length++
}

module.exports = append
