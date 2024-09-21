function remove(value) {
  removeNode(this.root, value)
}

function removeNode(node, value) {
  if (!node) return
  if (value < node.value) {
    // 小于则左递归
    //左子结点更新需要更新当前结点
    node.left = removeNode(node.left, value)
    return node
  }

  if (value > node.value) {
    // 大于则右递归
    //右子结点更新需要更新当前结点
    node.right = removeNode(node.right, value)
    return node
  }

  // 等于的情况
  // 如果是叶子结点
  if (!node.left && !node.right) {
    return null // 返回更新结点
  }

  // 如果是单节点
  if (!node.left) {
    return node.right //返回更新结点
  }
  if (!node.right) {
    return node.left // 返回更新结点
  }

  // 双结点，找到右子树下最小的结点
  let minNode = findMinNode(node.right)
  node.value = minNode.value //替换当前node值为右子树下最小值
  // 删除右子树下的用于替换值的结点
  node.right = removeNode(node.right, node.value)
  return node
}

// 找指定结点下的最小结点
function findMinNode(node, value) {
  while (node && node.left) {
    node = node.left
  }
  return node
}

module.exports = remove
