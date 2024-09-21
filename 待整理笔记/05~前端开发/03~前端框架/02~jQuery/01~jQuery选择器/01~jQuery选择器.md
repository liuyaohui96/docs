
## jQuery选择器
jQuery selector 的基本语法是`$()` ，`$()` 返回一个jQuery实例，很多方法都定义在`jQuery.prototype`上，所以实例可以使用这些方法，当然也有定义在jQuery上的方法，如`$.ajax()`

注意，因为`$()`返回的是Jquery实例对象，所以不能使用DOM的方法和属性
```js
$ === jQuery // true
```
特殊地，在jQuery实例上调用方法，如果需要指向该实例对象，需要使用`$(this)`而不是this

## jquery 对象与DOM对象相互转换
```js
// jQuery 对象转换为DOM对象
$(selector)[0]
$(selector).eq(0)[0]
$(seelector).get(0)

// jQuery 类数组对象转换为数组
Array.from($(selector))

// DOM 对象转换为jQuery对象
$(div) // 括号内不添加双引号
```
