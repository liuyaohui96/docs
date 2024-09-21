
## v-model
v-model 为表单元素或者组件实现双向数据绑定，限制使用在`<input> | <select> | <textarea> | 自定义组件`上，会根据控件类型自动选取正确的方法来更新元素。语法格式是`v-model:modifier = value`:
* modifier: 修饰符有·
  * .lazy：监听change 事件, 而不是input事件。默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步，可以添加 lazy 修饰符，从而转变为使用 change 事件进行同步
  * .number：转换输入的字符串为数字，当需要得到number时可以使用。即使在 `type="number"` 时，HTML 输入元素的值也总会返回字符串，
  * .trim：过滤表单输入的首尾空格

v-model 会忽略所有表单元素的`value、checked、selected`特性的初始值而总是将 Vue 实例的数据作为数据来源，所以应该通过 JavaScript 在组件的 data 选项中声明初始值。
    
v-model 通过监听相应的表单事件，修改相应的属性，然后将相应的值更新到绑定的数据上，在内部为不同的输入元素使用不同的属性并抛出不同的事件：
* text 和 textarea 元素：使用 `value `作为prop 和 `input 事件`: 所以
  * 初始值都应该绑定到value
* checkbox 和 radio 使用：`checked` 作为prop 和 `change 事件`，所以:
  * 单个复选框，绑定到布尔值；多个复选框，绑定到同一个数组
  * 单选按钮都绑定到同一个bolean值
* select 字段： `value `作为 prop 和 `change 事件`。所以:
  * 单选时，value绑定到一个值
  * 多选时，value绑定到数组