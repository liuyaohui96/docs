
## 序列化方法
1. $.param()
2. $.serialize()
3. $.serializeArray()

## $.param()
为对象或者数组创建一个序列化对象
```js
// tradition 可选的boolean值，指示是否以传统形式序列化对象
$.param(object[, trad])
```

## $.serialize()
为表单或者表单的`input | textarea`等序列化为一个URL编码的字符串
```js
$(selector).serialize()
```

## $.serializeArray()
为表单或者表单的`input | textarea`等序列化为一个的数组([`{name:value1, value: vlaue1}, ...]` 这种形式)

```js
$(selector).serializeArray()
```