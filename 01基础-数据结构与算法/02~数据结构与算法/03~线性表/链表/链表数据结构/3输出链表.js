function print() {
  let current = this.head
  while (current) {
    console.log(current.element)
    current = current.next
  }
}

module.exports = print
