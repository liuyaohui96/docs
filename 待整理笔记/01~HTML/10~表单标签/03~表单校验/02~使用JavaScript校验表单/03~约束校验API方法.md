
## 约束校验API方法
* checkValidity()：如果元素的值不存在校验问题，返回 true，否则返回 false。如果元素校验失败，此方法会触发invalid 事件。
* setCustomValidity(message)：元素添加一个自定义的错误消息