module.exports = removeAt = function(index) {
  if (index < 0 || index > this.length) return false
  let listIdx = 0
  let current = this.head
  let previous

  if (index === 0) this.head = current.next
  else {
    while (listIdx < index) {
      previous = current
      current = current.next
      listIdx++
    }
    previous.next = current.next
  }
  this.length--
  return true
}
