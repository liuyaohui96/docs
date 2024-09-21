
## isNaN()
确定一个值是否为NaN，也可以使用 ECMAScript 2015 中定义的 Number.isNaN() 来判断

```js
isNaN(value)
```

## isNaN 函数的必要性
与 JavaScript 中其他的值不同，NaN不能通过相等操作符（== 和 ===）来判断 ，因为 NaN == NaN 和 NaN === NaN 都会返回 false