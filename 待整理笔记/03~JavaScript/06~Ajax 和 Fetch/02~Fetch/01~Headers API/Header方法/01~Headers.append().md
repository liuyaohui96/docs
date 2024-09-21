
## Headers.append()
append()方法可以追加一个新值到已存在的headers上，或者新增一个原本不存在的header。如果指定header不存在, append()将会添加这个header并赋值 . 如果指定header已存在并允许有多个值, append()将会把指定值添加到值队列的末尾。
```js
myHeaders.append(name,value);

// === 例子
// 参数可以忽略，后续使用append方法添加
let myHeaders = new Headers(); // Currently empty
myHeaders.append('Content-Type', 'image/jpeg');
myHeaders.get('Content-Type'); // Returns 'image/jpeg'
```
Headers.set() 和 append() 两者之间的不同之处在于：当指定header是已经存在的并且允许接收多个值时，Headers.set会重写此值为新值，而append()会追加到值序列的尾部