function preOrderTraverse() {
  preOrderTraverseNode(this.root)
}

function preOrderTraverseNode(node) {
  if (!node) return // node 为空退出
  console.log(node.value)
  preOrderTraverseNode(node.left)
  preOrderTraverseNode(node.right)
}
module.exports = preOrderTraverse
