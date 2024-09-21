const person = { name: 'Lydia' };

function sayHi(age) {
  console.log(`${this.name} is ${age}`);
}

sayHi.call(person, 21); // Lydia is 21
console.log(typeof sayHi.bind(person, 21)); // function
