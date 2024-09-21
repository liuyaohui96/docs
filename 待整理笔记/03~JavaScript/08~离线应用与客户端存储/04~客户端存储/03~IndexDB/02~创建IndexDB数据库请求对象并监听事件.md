
## 创建IndexDB数据库请求对象并监听事件
1. 使用indexedDB的open方法可以创建一个IDBOpenDBRequest对象
2. IDBOpenDBRequest对象定义了几个重要属性，可以用于事件监听
    * onerror: 请求失败的回调函数句柄
    * onsuccess:请求成功的回调函数句柄
    * onupgradeneeded:请求数据库版本变化句柄
```js
// version 是版本号，通常版本号从1开始，可以使任意的值
// 返回一个请求对象，在上面可以添加事件监听
indexedDB.open(databaseName, version)

// === 例子
let openRequest = indexedDB.open(databaseName, version)
// 第一次使用请求指定的数据库或者版本号发生改变时触发
openRequst.onupgradeneeded = function(e){
  // ...
}
openRequst.onsuccess = function(e){
  // ...
}
openRequst.error = function(e){
  // ...
}
```

## 例子
```js
// onupgrateneeded 负责创建数据库和对象
// onsuccess 负责处理DOM事件，操作数据库和对象

// db.objectStoreNames.contains
// db.createObjectStore('person')
let databaseName = 'website'
let version = 1
let openRequest = indexedDB.open(databaseName, version)
openRequest.onupgradeneeded = function(e){
  let db = e.target.result // 取得数据库本身
  // 如果指定数据库没有包含了person对象
  if(!db.objectStoreNames.contains('person')){
    // 可以使用keypath确保属性的唯一性，即设置key
    let objStore = db.createObjectStore('person')
    // db.createObjectStore('person', {keypath: 'id', autoIncrement: true})
    // db.createObjectStore('person', {keypath: 'id'})
    // db.createObjectStore('person', {multiEntry: true})
    
    // ==== 建立索引，第一个参数是索引名称
    // 第二个参数是索引的属性名
    // 第三个为选项，有两个：
      // 一个unique设置唯一性
      // 另一个参数multiEntry用于数组，指是否映射数组的每一项的值
    objStore.createIndex('gender', 'gender', {unique: true})
    // objStore.createIndex('hobbies', 'hobbies', {unique: true, multiEntry: true})
  }
}
openRequest.onsuccess = function(e){
  // ...
}
openRequest.error = function(e){
  // ...
}
```