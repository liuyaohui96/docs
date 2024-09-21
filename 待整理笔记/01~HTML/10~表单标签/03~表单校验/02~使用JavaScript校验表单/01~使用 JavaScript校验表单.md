## 使用 JavaScript校验表单
1. 设置form novalidate 属性。novalidate 属性关闭浏览器的自动校验；这允许我们使用脚本控制表单校验, 这并不禁止对约束校验 API的支持或是以下 CSS 伪类：`:valid、:invalid、:in-range 、:out-of-range` 的应用
2. 监听input或submit事件
3. 事件处理函数中使用element.validity.valid 检测有没有通过检测，如果没有通过检测submit事件需要使用event.preventDefault()来阻止事件默认发生。



  



## api方法



```js
// 例子
let form = document.getElementsByTagName('form')[0];
let email = document.getElementById('mail');
let error = document.querySelector('.error');

email.addEventListener(
  'input',
  function(event) {
    // 当用户输入信息时，校验 email 字段
    if (email.validity.valid) {
      // 如果校验通过，清除已显示的错误消息
      error.innerHTML = ''; // 重置消息的内容
      error.className = 'error'; // 重置消息的显示状态
    }
  },
  false
);
form.addEventListener(
  'submit',
  function(event) {
    // 当用户提交表单时，校验 email 字段
    if (!email.validity.valid) {
      // 如果校验失败，显示一个自定义错误
      error.innerHTML = 'I expect an e-mail, darling!';
      error.className = 'error active';
      // 还需要阻止表单提交事件，以取消数据传送
      event.preventDefault();
    }
  },
  false
);
```