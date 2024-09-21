// 判断对象的属性是实例的还是原型的
function Person(name) {
  this.name = name;
}

let liuyaohui = new Person('liuyaohui');

function classifyProperty(prop, obj) {
  if (prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return `${prop} is a instance property`;
    }
    return `${prop} is a prototype property `;
  }
  return `${prop} is not a prototype property`;
}

console.log(classifyProperty('name', liuyaohui)); // name is a instance property
console.log(classifyProperty('toString', liuyaohui)); // toString is a prototype property
