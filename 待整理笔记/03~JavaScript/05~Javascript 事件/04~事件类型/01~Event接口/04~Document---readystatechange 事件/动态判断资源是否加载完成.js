// 判断动态载入的 script、link 标签是否加载完成 demo
const script = document.createElement('script');
script.addEventListener('readystatechange', function eventListener(event) {
  if (event.readyState === 'loaded' || event.readyState === 'complete') {
    // hack 的手段，浏览器自身的问题
    script.removeEventListener('readystatechange', eventListener);
  }
});

script.src = 'example.js';
document.body.appendChild(script);
