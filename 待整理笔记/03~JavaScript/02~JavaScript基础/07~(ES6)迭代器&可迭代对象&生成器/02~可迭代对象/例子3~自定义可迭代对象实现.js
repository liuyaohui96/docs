// 对象默认情况下是不可迭代的。
// 可以通过创建一个`Symbol.iterator`的生成器函数，使之成为可迭代对象

/*
创建Symbol.iterator方法，该方法是一个生成器函数，利用生成器函数返回迭代器对象
*/
let collection = {
  items: [1, 2, 3],
  *[Symbol.iterator]() {
    for (let item of this.items) {
      yield item;
    }
  }
};

for (let x of collection) {
  console.log(x); // 1 2 3
}
