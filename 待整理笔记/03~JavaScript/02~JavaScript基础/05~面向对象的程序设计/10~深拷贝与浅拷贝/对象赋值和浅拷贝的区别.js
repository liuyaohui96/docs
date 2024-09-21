// 对象赋值，赋值的是对象的引用
// 浅拷贝，复制对象的一层属性，对于其中的对象属性值是基本类型，复制值，对于其中是引用类型的，复制引用
// 所以，赋值使得对象之间相互影响；而浅拷贝，复制对象的第一层属性，基本类型对象属性值是相互独立的，
// 引用类型属性值相互影响
let obj1 = {
  name: 'liuyaohui1',
  age: '24',
  language: ['Chinese', 'English']
};
let obj2 = obj1;
obj2.name = 'liuyaohui2';
obj2.language[1] = ['Japanese'];
/*
输出的值一样，都是：
obj1 { 
  name: 'liuyaohui2',
  age: '24',
  language: [ 'Chinese', [ 'Japanese' ] 
]}
*/
console.log(obj1);
console.log(obj2);

// === 浅拷贝
let obj3 = {
  name: 'liuyaohui1',
  age: '24',
  language: ['Chinese', 'English']
};
let obj4 = shallowCopy(obj3);
obj4.name = 'liuyaohui2';
obj4.age = 30;
obj4.language[1] = 'Korean';
function shallowCopy(obj) {
  let dst = {};
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      dst[prop] = obj[prop];
    }
  }
  return dst;
}
// { name: 'liuyaohui1', age: '24', language: [ 'Chinese', 'Korean' ] }
console.log(obj3);
// { name: 'liuyaohui2', age: 30, language: [ 'Chinese', 'Korean' ] }
console.log(obj4);
