
1. FormData.append()
2. FormData.set()

FormData.set() 和 FormData.append() 的区别在于，如果指定的键已经存在， FormData.set 会使用新值覆盖已有的值，而 append() 会把新值添加到已有值集合的后面

## FormData.append()
FormData.append()  会添加一个新值到 FormData 对象内的一个已存在的键中，如果键不存在则会添加该键

方法参数：
* name：键名
* value：指定键的值。可以是USVString 或 Blob (包括子类型，如 File)，如果它的字段类型不是Blob也不是File，则会被转换成字符串类
* filename：可选，传给服务器的文件名称。 当一个 Blob 或 File 被作为第二个参数的时候， Blob 对象的默认文件名是 "blob"。 File 对象的默认文件名是该文件的名称
```js
FormData.append(name, value[, filename])
```

## FormData.set()
FormData.set() 会对 FormData 对象里的某个 key 设置一个新的值，如果该 key 不存在，则添加。

方法参数：
* name：键名
* value：指定键的值。可以是USVString 或 Blob (包括子类型，如 File)，如果它的字段类型不是Blob也不是File，则会被转换成字符串类
* filename：可选，传给服务器的文件名称。 当一个 Blob 或 File 被作为第二个参数的时候， Blob 对象的默认文件名是 "blob"。 File 对象的默认文件名是该文件的名称
```js
FormData.append(name, value[, filename])
```