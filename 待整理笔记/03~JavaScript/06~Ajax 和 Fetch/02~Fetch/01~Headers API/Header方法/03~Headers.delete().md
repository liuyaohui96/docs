
## Headers.delete()
delete() 方法可以从Headers对象中删除指定header

下列原因将会导致该方法抛出一个TypeError:
* header名在HTTP header中是不存在的.
* header被锁定了

```html
myHeaders.delete(name);
```