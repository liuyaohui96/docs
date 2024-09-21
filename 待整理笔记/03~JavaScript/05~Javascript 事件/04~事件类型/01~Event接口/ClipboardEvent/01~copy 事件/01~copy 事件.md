
## copy 事件
使用`Ctrl + c ` 或者快捷菜单的复制命令时触发copy事件。

copy事件没有默认行为, 除非
* 默认事件没有取消，就复制到选区（如果有选中内容）到剪切板
* 如果取消了默认事件，但是调用了setData()方法：就复制clipboardData的内容到到剪切板
* 如果取消了默认行为，而且没有调用setData()方法，就没有任何行为
```js
document.addEventListener('copy', function(e){
    e.clipboardData.setData('text/plain', 'Hello, world!');
    e.clipboardData.setData('text/html', '<b>Hello, world!</b>');
    e.preventDefault(); // We want our data, not data from any selection, to be written to the clipboard
});
```