function List() {
  this.data = [];
  this.maxSize = 20; // 控制数组的最大长度
  this.length; // 当前数组长度
}

// 初始化设置list.length长度为0
List.prototype.initList = function() {
  this.length = 0;
};

// 判断list是否为空
List.prototype.isListEmpty = function() {
  return this.length === 0 ? true : false;
};

// 清除线性表, 将list.length置为0
List.prototype.clearList = function() {
  this.length = 0;
};

// 返回线性表长度
List.prototype.listLength = function() {
  return this.length;
};

// 根据位置获取元素
List.prototype.getElem = function(i) {
  let list = this;
  if (list.length == 0 || i < 1 || i > list.length) return;
  return list.data[i - 1];
};

// 根据元素获取位置
List.prototype.locateElem = function(e) {
  let list = this;
  if (list.length == 0) return;
  return list.data.indexOf(e) + 1;
};

// 插入元素
List.prototype.listInsert = function(i, e) {
  let list = this;
  if (list.length == list.maxSize || i < 1 || i > list.length + 1)
    // 达到最大长度或插入的位置不能越界，退出
    return;

  // 插入的位置不为表尾+1的时候
  if (i <= list.length) {
    for (let j = list.length - 1; j >= i; j--) {
      list.data[j + 1] = list.data[j];
    }
  }
  list.data[i - 1] = e;
  list.length++;
};

// 移除元素
List.prototype.listDelete = function(i) {
  let list = this;
  if (list.length == 0 || i > list.length || i < 1) return;

  // 如果删除的不是最后的位置
  if (i < list.length) {
    for (let j = i - 1; j < list.length - 1; j++) {
      list.data[j] = list.data[j + 1];
    }
  }
  list.length--;
};

// 输出线性表
List.prototype.printList = function() {
  let list = this;
  for (let i = 0; i < list.length; i++) {
    console.log(list.data[i]);
  }
};

module.exports = List;
