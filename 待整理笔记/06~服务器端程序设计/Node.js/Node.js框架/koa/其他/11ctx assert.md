ctx.assert(value, [status], [msg], [properties])

```js
ctx.assert(ctx.state.user, 401, 'User not found. Please login!');
```
如果这个 `ctx.state.user ` 不存在，那么 就会发送错误信息（类似于抛出异常），如果通过这个断言，那么就会继续执行下面的语句