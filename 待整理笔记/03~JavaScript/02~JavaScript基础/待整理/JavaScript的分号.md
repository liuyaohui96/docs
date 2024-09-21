```js
function greet() {
  return
  {
    message: "hello"
  }
}
```
因为 JavaScript 自动插入分号（ASI）机制，编译器在 return 之后会插入一个分号，因此这个函数会返回 undefined 并且不会抛出报错

JavaScript 的分号自动插入机制，解释器会在多数语句后放置分号。这就意味着在大多数情况下分号可以被忽略。有些情况分号是必须的
1. 行的开始是 [
2. 行的开始是 (