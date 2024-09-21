// 一个数组中 par中存放了多个人员的信息
// 每个人员的信息由 name 和 age 构成
// 请用 JS 实现年龄从小到大的排序

let par = [
  { age: 10, name: 'liuyaohui' },
  { age: 5, name: 'liuyaohui' },
  { age: 7, name: 'liu' }
];
par.sort((a, b) => a.age - b.age);

console.log(par);
/*
[ { age: 5, name: 'liuyaohui' },
  { age: 7, name: 'liu' },
  { age: 10, name: 'liuyaohui' } ]
*/
