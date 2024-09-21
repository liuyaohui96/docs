module.exports = remove = function(element) {
  let index = this.indexOf(element)
  return this.removeAt(index)
}
