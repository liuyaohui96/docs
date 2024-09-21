
## 使用 FileList

一个 FileList 对象通常来自于一个 HTML `<input>` 元素的 files 属性，你可以通过这个对象访问到用户所选择的文件, 通过文件列表FileList 的length属性决定用户选择了多少文件
```js
// <input id="fileItem" type="file" multiple>

// 获取到一个FileList对象中的第一个文件(File 对象)
var file = document.getElementById('fileItem').files[0];

// 获取被选择文件的信息
files.length // 选中文件对象的数量

// file 对象
file.name // 文件名称
file.size // 文件大小，按字计数bytes计算
file.type // 文件MIME类型
```

## 通过change事件访问被选择的文件
```js
const file = document.querySelector('input');
file.addEventListener('change', function() {
  for (let i = 0; i < this.files.length; i++) {
    let file = this.files[i];
    console.log(
      `file name:  ${file.name}`,
      `file type: ${file.type}`,
      `file size: ${file.size} bytes`
    );
  }
});

```