
参考：https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry
## IntersectionObserverEntry对象常用属性
* IntersectionObserverEntry.isIntersecting： 布尔值，如果目标元素与相交观察者的根相交，则为true。
如果是这样，则IntersectionObserverEntry描述了到相交状态的转换；如果为假，则您知道过渡是从相交到不相交。

* IntersectionObserverEntry.target：指示哪个目标Element更改了与相交根的相交量。