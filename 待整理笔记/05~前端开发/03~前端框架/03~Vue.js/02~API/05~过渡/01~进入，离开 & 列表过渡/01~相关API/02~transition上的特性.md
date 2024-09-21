
## transition元素上的特性
* name: 指定过渡名称。用于自动生成 CSS 过渡类名，默认类前缀为`v-`,例如name为`fade`，则过渡类会自动变为`fade-enter | fade-enter-active | ...`

* css：boolean值，默认为 true，设置是否使用 CSS 过渡类。如果设置为 false，过渡只通过组件事件触发注册的 JavaScript 钩子

* type：指定过渡事件类型，侦听过渡何时结束。有效值为 "transition" 和 "animation"。默认 Vue.js 将自动检测出持续时间长的为过渡事件类型。

* mode：控制离开/进入的过渡时间序列，有效的模式有 "out-in" 和 "in-out"；默认同时生效，进入和离开同时发生。
    * in-out：新元素先进行过渡，完成之后当前元素过渡离开。in-out 模式不是经常用到
    * out-in：当前元素先进行过渡，完成之后新元素过渡进入

* duration： 语法格式是`number | { enter: number, leave: number }`，指定定过渡的持续时间。默认情况下，Vue 可以自动得出过渡效果的完成时机，Vue 会等待过渡所在根元素的第一个 transitionend 或 animationend 事件。有些情形下需要自定义过渡持续时间，如果其中一些嵌套的内部元素相比于过渡效果的根元素有延迟的或更长的过渡效果。

* appear: boolean 值，默认值为false，设置是否在初始状态过渡。默认和进入/离开过渡一样，同样也可以自定义 CSS 类名：
  * appear-class：string
  * appear-to-class：string
  * appear-active-class：string

以下特性来自定义过渡类名:
* enter-class
* enter-active-class
* enter-to-class (2.1.8+)
* leave-class
* leave-active-class
* leave-to-class (2.1.8+)