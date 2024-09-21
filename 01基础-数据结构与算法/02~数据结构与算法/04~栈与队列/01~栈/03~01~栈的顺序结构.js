function Stack() {
  this.data = [];
  this.top;
  this.maxSize = 20;
}
Stack.prototype.initStack = function() {
  this.top = -1;
};

// 其他方法暂时忽略

Stack.prototype.push = function(e) {
  if (this.top == this.maxSize - 1) return -1;
  this.top++;
  this.data[this.top] = e;
};

Stack.prototype.pop = function() {
  if (this.top == -1) return -1;
  this.top--;
};

Stack.prototype.printStack = function() {
  let i = this.top;
  while (i >= 0) {
    console.log(this.data[i]);
    i--;
  }
};

module.exports = Stack;
