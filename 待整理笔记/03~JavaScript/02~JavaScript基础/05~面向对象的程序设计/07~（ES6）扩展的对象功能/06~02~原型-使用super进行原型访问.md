
## 使用super进行原型访问
ES5 在原型上调用对象上的同名方法，需要配合`Object.getPrototypeOf(this).method.call(this)`, 使用`call(this)`是为了保证调用原型方法时，上下文仍然是对象，而不是它的原型对象
```js
let person = {
  word: 'hello',
  getGreeting() {
    return this.word;
  }
};

let friend = {
  word: 'hi',
  getGreeting() {
    return Object.getPrototypeOf(this).getGreeting.call(this);
  }
};

// set prototype to person
Object.setPrototypeOf(friend, person);
console.log(friend.getGreeting()); // "hi"
console.log(Object.getPrototypeOf(friend) === person); // true

```

ES6 引入了`super`来实现, `super`关键字一定在方法的简写内才能使用
```js
// `super`关键字一定在方法的简写内才能使用
let person = {
  word: 'hello',
  getGreeting() {
    return this.word;
  }
};

let friend = {
  word: 'hi',
  getGreeting() {
    return super.getGreeting();
  }
};

// set prototype to person
Object.setPrototypeOf(friend, person);
console.log(friend.getGreeting()); // "hi"
console.log(Object.getPrototypeOf(friend) === person); // true
```

## 非super方法引发的反复递归调用
因为super引用不是动态的，它总是能指向正确的对象，所以不会发生反复递归调用的问题
```js
// ==== 非super方法引发的反复递归调用
let person = {
  getGreeting() {
    return 'Hello';
  }
};

// prototype is person
let friend = {
  getGreeting() {
    return Object.getPrototypeOf(this).getGreeting.call(this) + ', hi!';
  }
};
Object.setPrototypeOf(friend, person);

// prototype is friend
let relative = Object.create(friend);

console.log(person.getGreeting()); // "Hello"
console.log(friend.getGreeting()); // "Hello, hi!"

// === 反复递归调用
console.log(relative.getGreeting()); // error!
```