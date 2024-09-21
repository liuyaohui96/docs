// 插入根结点
module.exports = insert = function(value) {
  // 结点结构
  let TreeNode = function(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  let treeNode = new TreeNode(value)
  if (!this.root) {
    // 插入首个结点
    this.root = treeNode
  } else {
    // 如果不是首个结点
    /*
    递归判断：如果小于子树根结点，则检查左子树非空，进行递归，如果为空，则进行赋值
    如果大于子树根结点，则检查右子树非空，进行递归，如果为空，则进行赋值
    */
    insertNode(this.root, treeNode)
  }
}

function insertNode(node, treeNode) {
  // 如果值小于子树根结点
  if (treeNode.value < node.value) {
    if (!node.left) node.left = treeNode
    // 空，则赋值左子树为treeNode
    else {
      insertNode(node.left, treeNode) // 递归
    }
  }

  // 如果值大于子树根结点
  else {
    if (!node.right) node.right = treeNode
    else {
      insertNode(node.right, treeNode) // 递归
    }
  }
}
