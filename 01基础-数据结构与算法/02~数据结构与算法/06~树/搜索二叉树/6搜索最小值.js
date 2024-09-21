function min() {
  let node = this.root // 起始结点
  if (!node) return null // 头结点无，则返回null

  // 左结点无左子树则返回
  while (node && node.left) {
    node = node.left
  }
  return node.value
}

module.exports = min
