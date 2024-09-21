module.exports = indexOf = function(element) {
  let current = this.head
  let index = 0
  while (current) {
    if (current.element === element) return index
    index++
    current = current.next
  }
  return -1
}
