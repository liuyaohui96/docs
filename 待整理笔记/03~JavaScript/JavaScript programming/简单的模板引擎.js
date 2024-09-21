/*
var data = {
	name: 'xiaoming',
	age: '18'
};
var template = "My name is {$name}, my age is {$age}".
//写一个函数，实现：
function shenmegui(template, data) {

} => My name is xiaoming, my age is 18.
*/

var data = {
  name: 'xiaoming',
  age: '18'
}
var template = 'My name is {$name}, my age is {$age}'

function shenmegui(template, data) {
  template = template.replace(/{\$name}/g, data.name)
  template = template.replace(/{\$age}/g, data.age)
  return template
}
console.log(shenmegui(template, data))
