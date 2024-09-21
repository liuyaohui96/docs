function treeDepth() {
  return countTreeDepth(this.root)
}

function countTreeDepth(node) {
  if (!node) return 0
  let leftDepth = countTreeDepth(node.left)
  let rightDepth = countTreeDepth(node.right)
  return Math.max(leftDepth, rightDepth) + 1
}

module.exports = treeDepth
