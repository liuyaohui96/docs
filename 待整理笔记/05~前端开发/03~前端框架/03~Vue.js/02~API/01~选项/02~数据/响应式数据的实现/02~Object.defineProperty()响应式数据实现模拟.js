let obj = [1, 2, 3];
let methods = ['pop', 'shift', 'unshift', 'sort', 'reverse', 'splice', 'push'];
let arrayProto = Array.prototype; //获取数组原型

// 自定义原型，用于重写数组方法
let proto = Object.create(arrayProto);
methods.forEach(method => {
  proto[method] = function() {
    arrayProto[method].call(this, ...arguments);
    render();
  };
});

observer(obj); // 实现数据观察
obj.push(123, 55);
console.log(obj); //[1, 2, 3, 123,  55]

// === 函数
function render() {
  console.log('模拟视图渲染');
}

function observer(obj) {
  // 把所有的属性定义成set/get的方式
  if (Array.isArray(obj)) {
    obj.__proto__ = proto;
    return;
  }
  if (typeof obj == 'object') {
    for (let key in obj) {
      defineReactive(obj, key, obj[key]);
    }
  }
}
function defineReactive(data, key, value) {
  observer(value);
  Object.defineProperty(data, key, {
    get() {
      return value;
    },
    set(newValue) {
      observer(newValue);
      if (newValue !== value) {
        render();
        value = newValue;
      }
    }
  });
}
function $set(data, key, value) {
  defineReactive(data, key, value);
}
