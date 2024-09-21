
##  hashchange 事件
HashChangeEvent 用于构造URL 的参数列表（及 URL 中“#”号后面的所有字符串）发生变化时的事件对象。


在 Ajax 应用中，经常要利用URL参数列表来保存状态或导航信息

## hashchange事件类型
1. hashchange 事件

必须要把 hashchange 事件处理程序添加给 window 对象，然后 URL 参数列表只要变化就会调用它。此时的 event 对象应该额外包含两个属性：oldURL 和 newURL。这两个属性分别保存着参数列表变化前后的完整 URL

```js
if ('onhashchange' in window) {
  alert('The browser supports the hashchange event!');
}

window.addEventListenr('hashchange', function() {
  if (location.hash === '#somecoolfeature') {
    somecoolfeature();
  }
});
```