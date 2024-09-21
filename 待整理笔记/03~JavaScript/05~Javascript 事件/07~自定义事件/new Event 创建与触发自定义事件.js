// node 环境运行不能运行
// 获取不到 event.detail
let btn = document.querySelector('button');
let ev = new Event('alert', {
  bubbles: true, //事件是否冒泡;默认值false
  cancelable: true, //事件能否被取消;默认值false
  composed: false
});
btn.addEventListener(
  'alert',
  function(event) {
    console.log(event.bubbles); //true
    console.log(event.cancelable); //true
    console.log(event.detail); //undefined
  },
  false
);
btn.dispatchEvent(ev);
