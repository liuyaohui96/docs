

## FileReader 对象
fileReader 对象用于实现文件的异步读取

## 属性
```js
//  FileReader 读取操作时的当前状态
// 0 表示没有加载到任何数据， 1表示正在被加载，2表示读取完成
instanceOfFileReader.readyState

// 返回文件的内容。只有在读取操作完成后，此属性才有效，
// 返回的数据的格式取决于是使用哪种读取方法来执行读取操作的
instanceOfFileReader.result
```

## 方法
```js
// file 对象方法

/*
可以将 Blob 或者 File 对象转根据特殊的编码格式转化为字符串内容存在到result属性上，异步方法
*/
readAsText(file, encoding)

// 读取指定的 Blob 或 File 对象，以URL格式的字符串（base64编码）读取文件的内容保存到result属性上
instanceOfFileReader.readAsDataURL(blob);

// 读取指定的 Blob 或 File， 以ArrayBuffer 对象格式读取文件内容保存到result属性上
```

## 事件处理
当 FileReader 读取文件的方式为  readAsArrayBuffer, readAsDataURL 或者 readAsText 的时候，会触发一个 load 事件
```js
// === load 事件
const fileInput = document.querySelector('input');
fileInput.addEventListener('change', function() {
  let file = this.files[0]; // 假如不添加multiple属性，只加载一个文件
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function(event) {
    console.log(event.target.result);
  };
});

// === abort事件 在读取文件的时候终止
let reader = new reader();
reader.onabort = function(){
  // 中断读取后要做的事
}
```