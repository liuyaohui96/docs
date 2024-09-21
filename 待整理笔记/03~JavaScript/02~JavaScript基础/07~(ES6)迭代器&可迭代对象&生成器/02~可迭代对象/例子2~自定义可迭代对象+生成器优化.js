// 使用 Generator 函数(遍历器对象生成函数)简写 Symbol.iterator 方法
let obj = {
  name: 'liuyaohui',
  age: 24,
  job: 'engineer',
  *[Symbol.iterator]() {
    const self = this;
    const keys = Object.keys(self);
    for (let index = 0; index < keys.length; index++) {
      yield self[keys[index]]; //yield表达式仅能使用在 Generator 函数中
    }
  }
};
