// 一个参数的值始终是字符串值的数组。
// 其余参数获取传递到模板字符串中的表达式的值
function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = 'Lydia';
const age = 21;

getPersonInfo`${person} is ${age} years old`;
/*
[ '', ' is ', ' years old' ]
Lydia
21
*/
