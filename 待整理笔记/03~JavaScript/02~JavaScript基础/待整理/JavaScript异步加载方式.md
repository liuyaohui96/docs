## defer和async异步加载

`<script> `的 defer 属性，HTML4 中新增

`<script>` 的 async 属性，HTML5 中新增


defer 和 async 的区别在于: 

1. defer要等到整个页面在内存中正常渲染结束，才会执行；defer是“渲染完再执行”；如果有多个 defer 脚本，会按照它们在页面出现的顺序加载

2. async一旦下载完，渲染引擎就会中断渲染，是“下载完就执行”,执行这个脚本以后，再继续渲染,多个async脚本是不能保证加载顺序的

> 两个属性必须在脚本拥有 src 属性时才起作用

defer和async应用场景
1. 如果脚本之间相互依赖，请用 defer；如果脚本是独立的，请用 async
2. 如果 DOM 必须加载，请用 defer

## 延迟脚本的作用
默认情况下，遇到脚本，会暂停HTML的代码解析，如果脚本比较大，会导致网页呈现延迟，所以需要使用延迟脚本，解析完HTML代码再进行脚本语言的解析。


## 动态插入 script 脚本
有条件地创建动态脚本，如 onload 之后
```js
function downloadJS() { 
    varelement = document.createElement("script"); 
    element.src = "XXX.js"; 
    document.body.appendChild(element); 
}
//何时的时候，调用上述方法 
```

