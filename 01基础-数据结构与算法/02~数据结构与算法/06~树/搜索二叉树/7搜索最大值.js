function max() {
  let node = this.root // 起始结点
  if (!node) return null // 头结点无，则返回null

  // 左结点无左子树则返回
  while (node && node.right) {
    node = node.right
  }
  return node.value
}

module.exports = max
