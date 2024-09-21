
## render
render 是一个函数，是字符串模板的替代方案，Vue 推荐在绝大多数情况下使用模板创建HTML，render函数允许发挥JavaScript的编程能力。如果存在render函数，则Vue不会从template选项或者el选项指定的挂载元素上提取HTML作为模板。

render 函数接受一个createElement方法作为参数来创建VNode

如果组件是一个函数组件(functional component), render function 会接受地第二个参数`context`，为没有实例的函数组件提供上下文信息。