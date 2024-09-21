let a = [
  { id: '01', name: '姓名1' },
  { id: '02', name: '姓名2' },
  { id: '03', name: '姓名3' }
];
let b = [
  { num: '111', ' value': 'aaa' },
  { ' num': '222', ' value': 'bbb' },
  { ' num': '333', ' value': 'ccc' }
];

/*  
把两个数组合并成一个
[{ "id": "01", "name": "姓名1", "num":"111"," value":"aaa" },
     ……]
*/
let result = a.map((item, index) => Object.assign(item, b[index]));
console.log(a); // 对原对象进行了修改
console.log(result);
