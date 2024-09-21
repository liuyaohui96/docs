function LinkList() {
  // 头指针
  this.L = null;
  this.maxSize = 20; // 最大长度控制
}
LinkList.prototype.createNode = function(e) {
  return {
    data: e,
    next: null
  };
};

// 初始化链表
LinkList.prototype.initLinkList = function() {
  // 生成头节点
  this.L = this.createNode();
  if (!this.L) return -1; // L为空，则失败
};

// 判断链表是否为空
LinkList.prototype.isLinkListEmpty = function() {
  return this.L.next ? false : true;
};

// 清空链表
LinkList.prototype.clearLinkList = function() {
  let p = this.L.next; // 指向第一个结点
  let q = null;
  while (p) {
    q = p.next;
    p = null; // 将p节点清空
    p = q;
  }
  this.L.next = null; // 置空头结点后的结点
};

// 返回链表长度
LinkList.prototype.linkListLength = function() {
  let length = 0;
  let p = this.L.next;
  while (p) {
    length++;
    p = p.next;
  }
  return length;
};

// 获取元素
LinkList.prototype.getElem = function(i) {
  let p = this.L.next;
  let current = 1; // 当前位置
  while (p && current < i) {
    p = p.next;
    current++;
  }
  if (!p || current > i) return -1; // 返回错误
  return p.data;
};

// 获取位置
LinkList.prototype.LocateElem = function(e) {
  let p = this.L.next;
  let locate = 0;
  while (p) {
    locate++;
    if (p.data == e) return locate;
    p = p.next;
  }
  return -1; // 找不到
};

// 插入元素
LinkList.prototype.linkListInsert = function(i, e) {
  let p = this.L; // 首先指向第一个结点
  let current = 1; //当前计数
  while (p && current < i) {
    p = p.next;
    current++;
  }
  if (!p || current > i) return -1; // ERROR
  let node = this.createNode(e);
  node.next = p.next;
  p.next = node;
};

// 删除元素
LinkList.prototype.linkListDelete = function(i) {
  let p = this.L;
  let current = 1;
  while (p && current < i) {
    p = p.next;
    current++;
  }
  if (!p || current > i) return -1; // ERROR
  let q = p.next;
  p.next = q.next;
  q = null; // 置空指定位置
};

// 打印链表
LinkList.prototype.printLinkList = function() {
  let p = this.L.next;
  while (p) {
    console.log(p.data);
    p = p.next;
  }
};

// 头插法, 随机产生值，插入头部
LinkList.prototype.createListHead = function(n) {
  for (let i = 0; i < n; i++) {
    let randomEle = Math.floor(Math.random() * 100); // 0-99之间的整数
    let node = this.createNode(randomEle);
    node.next = this.L.next;
    this.L.next = node;
  }
};

// 尾插法
LinkList.prototype.createListTail = function(n) {
  let r = this.L;
  for (let i = 0; i < n; i++) {
    let randomEle = Math.floor(Math.random() * 100); // 0-99之间的整数
    let node = this.createNode(randomEle);
    r.next = node;
    r = node;
  }
};

module.exports = LinkList;
