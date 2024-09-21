
## Window对象方法-媒体查询
Window.matchMedia()返回一个新的MediaQueryList 对象，表示指定的媒体查询字符串解析后的结果

然后，可以使用返回的MediaQueryList的方法确定文档是否与媒体查询匹配，或者监视文档以检测它何时匹配或停止匹配媒体查询。

更详细查看CSS布局-响应式布局-媒体查询部分
```js
const mediaQueryList = window.matchMedia(mediaQueryString)

// === 例子
let para = document.querySelector('p');

let mql = window.matchMedia('(max-width: 600px)');

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    para.textContent = 'This is a narrow screen — less than 600px wide.';
    document.body.style.backgroundColor = 'red';
  } else {
    /* the viewport is more than than 600 pixels wide */
    para.textContent = 'This is a wide screen — more than 600px wide.';
    document.body.style.backgroundColor = 'blue';
  }
}

// 持续观察查询结果值的变化,需要在MediaQueryList对象上使用 addListener() 方法
mql.addListener(screenTest);
```
