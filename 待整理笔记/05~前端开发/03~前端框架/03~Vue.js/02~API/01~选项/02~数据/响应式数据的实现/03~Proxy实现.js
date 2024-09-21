function render() {
  console.log('模拟视图的更新');
}
let obj = {
  name: 'liuyaohui',
  age: { age: 100 },
  arr: [1, 2, 3]
};
let handler = {
  get(target, key) {
    // 如果取的值是对象就在对这个对象进行数据劫持
    if (typeof target[key] == 'object' && target[key] !== null) {
      return new Proxy(target[key], handler);
    }
    return Reflect.get(target, key);
  },
  set(target, key, value) {
    if (key === 'length') return true;
    render();
    return Reflect.set(target, key, value);
  }
};

let proxy = new Proxy(obj, handler);
proxy.age.name = 'hello world'; // 支持新增属性
console.log(proxy.age.name); // -> 模拟视图的更新 hello world
proxy.arr[0] = 'well done';
console.log(proxy.arr); // -> 模拟视图的更新 [ 'well done', 2, 3 ]
proxy.arr.length--; // 无效
