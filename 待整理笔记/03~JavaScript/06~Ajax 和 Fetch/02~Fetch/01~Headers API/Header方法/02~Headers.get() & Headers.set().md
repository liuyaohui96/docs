
## Headers.get() & Headers.set()
1. Headers.get()
2. Headers.set()

## Headers.get()
Headers.get() 以 ByteString 形式从Headers对象中返回指定header的全部值. 如果Header对象中不存在请求的header,则返回 null。如果存在多个header值,那么只有第一个值会被返回

如果HTTP header中不存在指定header名则会抛出一个TypeError.

```js
myHeaders.get(name);

```
## Headers.set()
set() 方法在可以在已经声明中的headers对象修改已有的一组键值对或者创建一个新的键值对。如果这个键值对不存在，那么set()方法首先创建一个键值对，然后给它赋值。如果这个键值对存在，那么set()方法将会覆盖之前的value值。

如果你需要增加一个键值对，而不是要覆盖之前的键值对，需要用append()方法
```js
myHeaders.set(name, value);
```