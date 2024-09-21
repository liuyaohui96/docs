// ==== 打开新的url的方法
location.assign(url); // 打开一个新URL并在浏览器中生成历史记录
window.location = url;
location = href;

location.replace(url); // 浏览器位置改变，不会产生历史记录
