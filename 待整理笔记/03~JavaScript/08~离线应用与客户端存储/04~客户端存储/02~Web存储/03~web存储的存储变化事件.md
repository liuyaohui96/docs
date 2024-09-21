
## web存储的存储变化事件
```js
// 存储事件在window上触发
// 存储事件的触发只有在浏览器的另外一个实例修改web存储时，才会被触发
window.on('storage', function(e){
  coonsole.log(e.originalEvent.newValue)
  coonsole.log(e.originalEvent.oleValue)
})
```