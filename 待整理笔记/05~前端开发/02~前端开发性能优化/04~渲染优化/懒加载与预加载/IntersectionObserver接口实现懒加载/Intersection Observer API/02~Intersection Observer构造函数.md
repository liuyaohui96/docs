
## Intersection Observer构造函数
Intersection Observer 构造函数参数：
* callback：当其监听到目标元素的可见部分穿过了一个或多个阈(thresholds)时，会执行指定的回调函数，回调函数参数：
    * entries：包含了每个被触发的阈值
    * observer：被调用的IntersectionObserver实例
* options：可选，可以指定以下属性
    * root：指定根(root)元素，用于检查目标的可见性。必须是目标元素的父级元素。如果未指定或者为null，则默认为浏览器视窗。
    * rootMargin：root元素的外边距。该属性值是用作root元素和target发生交集时候的计算交集的区域范围，使用该属性可以控制root元素每一边的收缩或者扩张。默认值为0
    * threshold：可以是单一的number也可以是number数组，target元素和root元素相交程度达到该值的时候IntersectionObserver注册的回调函数将会被执行。例如如果想要探测当target元素的在root元素中的可见性超过50%的时候，你可以指定该属性值为0.5。如果想要target元素在root元素的可见程度每多25%就执行一次回调，可以指定一个数组[0, 0.25, 0.5, 0.75, 1]。默认值是0(意味着只要有一个target像素出现在root元素中，回调函数将会被执行)。该值为1.0含义是当target完全出现在root元素中时候 回调才会被执行

回调函数将会在目标(target)元素和根(root)元素的交集大小超过阈值(threshold)规定的大小时候被执行

```js
let observer = new IntersectionObserver(callback[, options]);

// === 例子
let options = {
    root: document.querySelector('#scrollArea'), 
    rootMargin: '0px', 
    // 阈值为1.0意味着目标元素完全出现在root选项指定的元素中可见时，回调函数将会被执行
    threshold: 1.0
}

let observer = new IntersectionObserver(callback, options);
```