const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]); // 456

// 对象键自动转换为字符串 -> a["Object object"] = 123
