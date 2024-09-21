// 后进先出

function Stack() {
  // 选择数组作为保存栈元素
  let items = []

  //增加
  this.push = function(element) {
    items.push(element)
  }

  // 删除
  this.pop = function(element) {
    items.pop()
  }

  // 自定义获取栈顶元素
  this.peek = function() {
    return items[items.length - 1]
  }

  // 检查栈是否为空
  this.isEmpty = function() {
    return items.length == 0
  }

  // 清空栈
  this.clear = function() {
    items = []
  }

  // 打印栈
  this.print = function() {
    console.log(items.toString())
  }
}

module.exports = Stack
