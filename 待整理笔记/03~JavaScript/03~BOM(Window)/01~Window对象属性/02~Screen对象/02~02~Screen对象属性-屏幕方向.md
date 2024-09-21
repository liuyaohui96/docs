
## Screen对象属性-屏幕方向
Screen.orientation 只读属性，返回一个ScreenOrientation对象，表示屏幕的当前方向

```js
// === 例子
let orientation = screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type;

if (orientation === "landscape-primary") {
  console.log("That looks good.");
} else if (orientation === "landscape-secondary") {
  console.log("Mmmh... the screen is upside down!");
} else if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
  console.log("Mmmh... you should rotate your device to landscape");
} else if (orientation === undefined) {
  console.log("The orientation API isn't supported in this browser :("); 
}
```

## ScreenOrientation
ScreenOrientatition的常用属性和方法如下所示：
1. ScreenOrientation.type 返回当前文档的方向类型的string，可能的值是：
    * portrait-primary 垂直
    * portrait-secondary
    * landscape-primary 水平
    * landscape-secondary

2. ScreenOrientation.angle 只读属性，返回文档的当前角度

3. ScreenOrientation.lock(orientation) 锁定文档的方向，orientation可能的值是：
    * "any"
    * "natural"
    * "landscape"
    * "portrait"
    * "portrait-primary"
    * "portrait-secondary"
    * "landscape-primary"
    * "landscape-secondary"

4. ScreenOrientation.unlock() 解锁文档的默认方向

