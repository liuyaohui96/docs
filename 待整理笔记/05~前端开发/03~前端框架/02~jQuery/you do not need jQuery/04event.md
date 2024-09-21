# event


## Document ready by DOMContentLoaded
```js
$(document).ready(eventHandler);

// 检测 DOMContentLoaded 是否已完成
if (document.readyState !== 'loading') {
  eventHandler();
} else {
  document.addEventListener('DOMContentLoaded', eventHandler);
}
```

## 绑定，解绑，触发事件
```js
$el.on(eventName, eventHandler); // jQuery
$el.off(eventName, eventHandler); // jQuery

el.addEventListener(eventName, eventHandler);
el.removeEventListener(eventName, eventHandler);

// ==== 触发事件
// jQuery
$(el).trigger('custom-event', {key1: 'data'});

// Native
if (window.CustomEvent) {
  const event = new CustomEvent('custom-event', {detail: {key1: 'data'}});
} else {
  const event = document.createEvent('CustomEvent');
  event.initCustomEvent('custom-event', true, true, {key1: 'data'});
}

el.dispatchEvent(event);
```