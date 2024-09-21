//如为对象添加Iterator 接口;
let obj = {
  name: 'liuyaohui',
  age: 24,
  job: 'engineer',
  [Symbol.iterator]() {
    const self = this;
    const keys = Object.keys(self);
    let index = 0;
    return {
      next() {
        if (index < keys.length) {
          return {
            value: self[keys[index++]],
            done: false
          };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

for (let item of obj) {
  console.log(item); //liuyaohui  24  engineer
}
