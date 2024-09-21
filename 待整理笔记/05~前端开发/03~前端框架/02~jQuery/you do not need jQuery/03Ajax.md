#　Ajax
Fetch API 是用于替换 XMLHttpRequest 处理 ajax 的新标准
```js
// jQuery
$(selector).load(url, completeCallback)

// Native
fetch(url).then(data => data.text()).then(data => {
  document.querySelector(selector).innerHTML = data
}).then(completeCallback)
```