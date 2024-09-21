
## IntersectionObserver.unobserve()
IntersectionObserver.unobserve() 命令IntersectionObserver停止对一个元素的观察

需要的参数：
* taget：要取消观察的目标，如果没有提供，方法不做任何事情，也不会抛出异常。
返回值
```js
IntersectionObserver.unobserve(target);

// === 例子
// 展示了一个观察器被创建，一个元素被观察，以及取消观察的过程
let observer = new IntersectionObserver(callback);
observer.observe(document.getElementById("elementToObserve"));

observer.unobserve(document.getElementById("elementToObserve"));
```