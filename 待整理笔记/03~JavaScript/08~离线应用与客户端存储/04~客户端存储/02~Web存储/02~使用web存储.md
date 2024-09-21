
## 使用web存储
```js
// ==== 因为sessionstorage的api与localstorage的用法一样
// 仅给出localstorage的api

localStorage.setItem(name, value)
localStorage.getItem(name)
localStorage.removeItem(name)
localStorage.clear()

// web 存储中仅支持字符串数据，所以不是字符串会自动进行toString转换
// 为了统一处理，可以使用JSON编码
// 如果将值进行了JSON编码，可以使用为name命名加上前缀js或json
localStorage.setItem(name, JSON.stringify(value))
JSON.parse(localstorage.getItem(name))
```