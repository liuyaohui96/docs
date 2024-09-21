// 插入结点
const insert = require('./2插入结点')
const inOrderTraverse = require('./3中序遍历')
const preOrderTraverse = require('./4先序遍历')
const postOrderTraverse = require('./5后序遍历')
const min = require('./6搜索最小值')
const max = require('./7搜索最大值')
const search = require('./8搜索特定值')
const remove = require('./9删除结点')
const treeDepth = require('./10深度')
function BinarySearchTree() {
  // 初始化根结点为空
  this.root = null

  // 插入结点函数
  this.insert = insert

  // 树的遍历
  this.inOrderTraverse = inOrderTraverse
  this.preOrderTraverse = preOrderTraverse
  this.postOrderTraverse = postOrderTraverse
  this.min = min
  this.max = max
  this.search = search
  this.remove = remove
  this.treeDepth = treeDepth
}

module.exports = BinarySearchTree
