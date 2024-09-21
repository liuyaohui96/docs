/**
 * @return {Boolean}
 */
function search(value) {
  return searchNode(this.root, value)
}

function searchNode(node, value) {
  if (!node) return false
  if (value < node.value) {
    // 小于，递归左结点
    return searchNode(node.left, value)
  }

  if (value > node.value) {
    // 大于，递归右结点
    return searchNode(node.right, value)
  }
  return true // 如果等于，返回true
}

module.exports = search
