let persons = [
  { name: 'liuyaohui', age: 21 },
  { name: 'liuyaohui2', age: 24 }
];

let findResult = persons.findIndex(person => person.age > 23);
console.log(findResult); // 1
