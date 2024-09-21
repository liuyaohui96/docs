
## 约束校验API属性
* validationMessage：本地化消息，描述元素不满足校验条件时（如果有的话）的文本信息；本地化消息，描述元素不满足校验条件时（如果有的话）的文本信息
* * willValidate 如果元素在表单提交时将被校验，返回 true，否则返回 false。
* validity：一个 ValidityState 对象，描述元素的验证状态，其属性有：
  * validity.customError 如果元素设置了自定义错误，返回 true ；否则返回false
  * validity.patternMismatch  如果元素的值不匹配所设置的正则表达式，返回 true，否则返回 false。当此属性为 true 时，元素将命中  :invalid CSS 伪类。
  * validity.rangeOverflow 如果元素的值高于所设置的最大值，返回 true，否则返回 false。当此属性为 true 时，元素将命中  :invalid CSS 伪类。
  * validity.rangeUnderflow 如果元素的值低于所设置的最小值，返回 true，否则返回 false。当此属性为 true 时，元素将命中  :invalid CSS 伪类。
  * validity.stepMismatch 如果元素的值不符合 step 属性的规则，返回 true，否则返回 false。当此属性为 true 时，元素将命中  :invalid CSS 伪类。
  * validity.tooLong 如果元素的值超过所设置的最大长度，返回 true，否则返回 false。当此属性为 true 时，元素将命中  :invalid CSS 伪类。
  * validity.typeMismatch 如果元素的值出现语法错误，返回 true，否则返回 false。当此属性为 true 时，元素将命中  :invalid CSS 伪类。
  * validity.valueMissing  如果元素设置了 required 属性且值为空，返回 true，否则返回 false。当此属性为 true 时，元素将命中:invalid CSS 伪类。
  * validity.valid 如果元素的值不存在校验问题，返回 true，否则返回 false。当此属性为 true 时，元素将命中  :valid CSS 伪类，否则命中 :invalid CSS 伪类。