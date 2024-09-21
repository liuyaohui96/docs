function LinkStack() {
  this.length; // 栈长度
  this.top;
}

LinkStack.prototype.createNode = function(e) {
  return {
    data: e,
    next: null
  };
};

LinkStack.prototype.initStack = function(e) {
  this.top = null;
  this.length = 0;
};

// 其他方法暂时忽略

LinkStack.prototype.push = function(e) {
  let node = this.createNode(e);
  node.next = this.top;
  this.top = node;
  this.length++;
};

LinkStack.prototype.pop = function(e) {
  if (this.top == null) reurn - 1;
  p = this.top;
  this.top = p.next;
  p = null; // 内存回收
};

LinkStack.prototype.printLinkStack = function() {
  let p = this.top;
  while (p) {
    console.log(p.data);
    p = p.next;
  }
};

module.exports = LinkStack;
