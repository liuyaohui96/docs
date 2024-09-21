
## event.preventDefault
在事件流的任何阶段调用`event.preventDefault`都会取消事件，取消事件，事件还是继续传播，除非碰到事件侦听器调用`stopPropagation() & stopImmediatePropagation()`才停止传播。

preventDefault 的应用：
1. 阻止复选框选中的默认行为
2. 阻止文本框中阻止有效文本输入
3. 链接的默认行为就是在被单击时会导航到其 href 特性指定的 URL
4. 阻止系统右键菜单
5. 阻止图片拖动的禁用效果
6. 阻止提交表单

event.cancelable 属性设置为 true 的事件，才可以使用 preventDefault()来取消其默认行为


IE8以及以下阻止默认事件使用 `event.returnValue`， 该属性表示该事件的默认操作是否已被阻止。默认情况下，它被设置为true，允许发生默认操作。将该属性设置为false，可以防止默认操作。


