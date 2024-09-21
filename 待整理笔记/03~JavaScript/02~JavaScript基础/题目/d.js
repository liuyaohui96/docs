const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj); // { a: 'three', b: 'two' }

// 对象有两个具有相同名称的键，则将替前面的键。
// 它仍将处于第一个位置，但具有最后指定的值
