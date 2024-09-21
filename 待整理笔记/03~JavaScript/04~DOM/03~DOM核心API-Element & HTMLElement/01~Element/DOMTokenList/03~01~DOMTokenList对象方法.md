

## DOMTokenList对象方法
1. DOMTokenList.item()
2. DOMTokenList.contains()
3. 操作方法
3. 迭代方法

## DOMTokenList.item()
DOMTokenList.item(index) 返回DOMTokenList中指定index的项目，从0开始计数，可以使用更简便的`DOMTOkenList[index]`方法访问DOMTokenList中的项目

## DOMTokenList.contains()
```js
// token 是DOMString，表示要检查DOMTokenList中是否存在的token
tokenList.contains(token);
```

## 操作方法
1. DOMTokenList.add(token1[, token2[, ...]]) 将指定的token增加到DOMTokenList中
2. DOMTokenList.remove(token1[, token2[, ...]]) 将指定的token移除出DOMTokenList中
3. DOMTokenList.replace(oldToken,newToken) 将DOMTokenList 中 OldToken 替换为newToken
4. DOMTokenList.toggle(token, force) 如果token存在，则将token删除，并返回false；如果token不存在在添加，并返回true；force设置后会将方法变成单向操作， 如设置为false, 则会删除标记列表中匹配的给定标记，且不会再度添加. 如设置为 true, 则将在标记列表中添加给定标记，且不会再度删除。

## 迭代方法
1. DOMTokenList.entries() 返回一个iterator，用于遍历所有的key/value
2. DOMTokenList.key() 返回一个iterator，用于遍历所有的value
3. DOMTokenList.value() 返回一个iterator，用于遍历所有的value
4. DOMTokenList.forEach(callback, thisArg)
    * callback 有三个参数item，index，list
    * thisArg 是运行callback中this的指向