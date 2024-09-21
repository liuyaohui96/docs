let LinkList = require('./03~01~线性表链式存储的实现');

let linkList = new LinkList();
console.log(linkList);
linkList.initLinkList(); // 初始化
console.log(linkList);

console.log('-------- 插入元素');
linkList.linkListInsert(1, 10);
linkList.linkListInsert(2, 20);
linkList.printLinkList(); // 10 20

console.log('------- 判断是否为空');
console.log(linkList.isLinkListEmpty()); // false

console.log('------- 计算链表长度');
console.log(linkList.linkListLength()); // 2

console.log('------- 获取元素');
console.log(linkList.getElem(2)); // 20

console.log('------- 获取位置');
console.log(linkList.LocateElem(20)); // 2

console.log('------- 删除元素');
linkList.linkListDelete(1);
linkList.printLinkList(); // 20

console.log('------- 清空');
linkList.clearLinkList();
console.log(linkList.isLinkListEmpty()); // true

console.log('------- 头插法创建整表');
linkList.createListHead(5);
linkList.printLinkList();

console.log('------- 清空');
linkList.clearLinkList();

console.log('------- 尾插法创建整表');
linkList.createListTail(5);
linkList.printLinkList();
