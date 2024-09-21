
## v-on
v-on 指令用于绑定事件监听器，用在普通元素上时，只能监听原生 DOM 事件，用在自定义元素组件上时，也可以监听子组件触发的自定义事件。语法格式是`v-on:event.modifier=value`:
* event: 事件类型由参数决定。参数可以是动动态的，语法格式是`v-on:[event].modifier=value`
* value:值是一个内联JavaScript语句或者方法名。Vue 2.4+，v-on 支持不带参数绑定一个事件/监听器键值对的对象，当使用对象语法时，是不支持任何修饰器。
* modier：见v-on事件修饰符

监听原生事件，可以在JavaScript内联语句中使用`$event`或者为方法传递`$event`参数，`$event`代表原生的事件对象。


```html
<!-- 内联语句 -->
<button v-on:click="doThat('hello', $event)"></button>
<!-- 方法处理器 -->
<button v-on:click="doThis"></button>
<!-- 对象语法 (2.4.0+) -->
<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>

<!-- 动态事件 (2.6.0+) -->
<button v-on:[event]="doThis"></button>

<!-- 停止冒泡 -->
<button @click.stop="doThis"></button>
<!-- 阻止默认行为 -->
<button @click.prevent="doThis"></button>
<!--  串联修饰符 -->
<button @click.stop.prevent="doThis"></button>
<!-- 键修饰符，键别名 -->
<input @keyup.enter="onEnter">
<!-- 键修饰符，键代码 -->
<input @keyup.13="onEnter">

<!-- ==== 组件上使用事件机制，当子组件触发事件，处理程序才会被调用 -->
<my-component @my-event="handleThis"></my-component>
```

