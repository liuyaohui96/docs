
## ClipboardEvent 对象属性
除了继承Event接口的对象属性，还有：

1. ClipboardEvent.clipboardData 

## ClipboardEvent.clipboardData 
ClipboardEvent.clipboardData 属性保存了一个 DataTransfer 对象，这个对象可用于
1. 通常通过调用 setData(format, data) 方法，描述哪些数据可以由 cut 和 copy 事件处理器放入剪切板
2. 通过调用 getData(format) 方法，获取由 paste 事件处理器拷贝进剪切板的数据