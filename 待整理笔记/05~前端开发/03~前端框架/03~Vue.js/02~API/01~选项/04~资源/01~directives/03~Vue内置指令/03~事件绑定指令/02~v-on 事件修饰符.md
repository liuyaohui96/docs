
## 事件修饰符
* .stop： 调用 `event.stopPropagation()` 停止冒泡，阻止事件继续传播
* .prevent： 调用 `event.preventDefault()` 阻止默认行为

* .capture：添加事件监听器时使用事件捕获模式（即内部元素触发的事件先在此处理，然后才交由内部元素进行处理）。对应 addEventListener 中的 capture 选项
* .once： 2.1.4 新增，事件只会被触发一次。对应 addEventListener 中的 once 选项
* .passive： (2.3.0) 以 { passive: true } 模式添加侦听器，对应 addEventListener 中的 passive 选项，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告

* .self： 只当在 event.target 是当前元素自身时触发处理函数
* .native： 监听组件根元素的原生事件

* .{keyCode | keyAlias}： 只当事件是从特定键触发时才触发回调。
    * 可以直接将 [KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) 暴露的任意有效按键名转换为 kebab-case 来作为修饰符,如`v-on:keyup.enter`，`v-on:keyup.page-down`
    * `KeyboardEvent.keyCode` 用法已经被废弃了并可能不会被最新的浏览器支持，如`v-on:keyup.13`

* 系统修饰键: 2.1.0 新增
    .ctrl
    .alt
    .shift
    .meta

* .exact 修饰符允许你控制由精确的系统修饰符组合触发的事件

* .left： (2.2.0) 只当点击鼠标左键时触发。
* .right： (2.2.0) 只当点击鼠标右键时触发。
* .middle： (2.2.0) 只当点击鼠标中键时触发。

**在和 keyup 事件一起用时,修饰键与常规按键不同**：事件触发时，修饰键必须处于按下状态，例如只有在按住 ctrl 的情况下释放其它按键，才能触发 keyup.ctrl，单单释放 ctrl 也不会触发事件。如果你需要释放ctrl而不需要其他键被释放，直接使用keyCode：keyup.17

串联使用修饰符时的注意事项：
* 顺序很重要，按照顺序执行：`v-on:click.prevent.self` 会阻止所有的点击，`v-on:click.self.prevent` 只会阻止对元素自身的点击。
* 不要把 `.passive` 和 `.prevent` 一起使用，`.passive` 会告诉浏览器不想阻止事件的默认行为，`.prevent` 将会被忽略，同时浏览器可能会展示一个警告。


```html
<!-- === 系统修饰键 -->
<!-- Alt + C -->
<input @keyup.alt.67="clear">

<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>

<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button @click.exact="onClick">A</button>
```