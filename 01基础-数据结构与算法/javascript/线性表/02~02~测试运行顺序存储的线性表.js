const List = require('./02~01~线性表顺序存储的实现');

const list = new List();

// 初始化线性表
console.log(list);
list.initList();
console.log('初始化后:', list);

// 判断是否为空
console.log(list.isListEmpty()); // true

console.log('----------插入元素');
// 插入元素
list.listInsert(1, 20);
list.listInsert(2, 30);
console.log(list);
list.printList(); // [20, 30]

// 获取元素
console.log('----------获取元素');
console.log(list.getElem(2)); // 30

// 获取位置
console.log('----------获取位置');
console.log(list.locateElem(20)); // 1

// 移除元素
console.log('----------移除元素');
list.listDelete(1);
list.printList(); // 30
