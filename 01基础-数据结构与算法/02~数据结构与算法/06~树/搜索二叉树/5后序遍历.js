function postOrderTraverse() {
  postOrderTraverseNode(this.root)
}

function postOrderTraverseNode(node) {
  if (!node) return // node 为空退出
  postOrderTraverseNode(node.left)
  postOrderTraverseNode(node.right)
  console.log(node.value)
}
module.exports = postOrderTraverse
