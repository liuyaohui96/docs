
## Document对象方法-其他
1. Document.write() 
2. Document.writeln()
3. Document.hasFocus() 

## Document.write() 
向文档中写入一串文本

注意: 因为 document.write 需要向文档流中写入内容，所以，若在一个已关闭（例如，已完成加载）的文档上调用 document.write，就会自动调用 document.open，**这将清空该文档的内容**。

## Document.writeln()
向文档中写入一串文本，并紧跟着一个换行符

```js
// document.writeln 和 document.write 一样，但是会添加一个换行符
document.writeln(line);
```


## Document.hasFocus() 
返回一个 Boolean，表明当前文档或者当前文档内的节点是否获得了焦点
```js
// 如果当前文档的活动元素获得了焦点，返回 true，否则返回false   
focused = document.hasFocus();
```