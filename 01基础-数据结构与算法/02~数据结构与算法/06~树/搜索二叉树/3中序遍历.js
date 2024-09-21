function inOrderTraverse() {
  inOrderTraverseNode(this.root)
}

function inOrderTraverseNode(node) {
  if (!node) return // node 为空退出
  inOrderTraverseNode(node.left)
  console.log(node.value)
  inOrderTraverseNode(node.right)
}
module.exports = inOrderTraverse
