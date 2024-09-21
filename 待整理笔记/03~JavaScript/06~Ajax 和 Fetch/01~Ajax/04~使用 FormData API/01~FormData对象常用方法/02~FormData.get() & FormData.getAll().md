
1. FormData.get()
2. FormData.getAll()

## FormData.get()
FormData.get() 用于返回FormData对象中和指定的键关联的第一个值

方法参数：
* name：指定键名
```js
FormData.get(name)
```

## FormData.getAll()
FormData.getAll() 返回该 FormData 对象指定 key 的所有值

方法参数：
* name：指定键名
```js
// 返回一个 FormDataEntryValue 数组
FormData.getAll(name)

// === 例子
let formData = new FormData();
formData.append('username', 'Chris');
formData.append('username', 'Bob');
formData.getAll('username'); // Returns ["Chris", "Bob"]
```