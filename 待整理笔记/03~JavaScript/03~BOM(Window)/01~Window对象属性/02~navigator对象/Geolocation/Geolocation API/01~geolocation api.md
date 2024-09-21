
## geolocation api
geolocation api 用来获取设备地理位置，使得Web应用基于用户的地理位置提供定制的信息。

## navigator.geolocation.getCurrentPosition
```js
/*  === navigator.geolocation.getCurrentPosition(success, error, options)
success: 获取位置成功时的回调函数，该函数获得一个position参数

error： 获取位置失败时的回调函数，该函数获得posiitonError作为唯一参数
*/
navigator.geolocation.getCurrentPosition(success, error, options)

/* === position对象 表示在给定的时间的相关设备的位置
Position.coords 返回一个定义了当前位置的Coordinates 对象, 该对象的常用属性是
    Coordinates.latitude
    Coordinates.longitude
    Coordinates.speed 
 
Position.timestamp 时间戳表示获取到的位置的时间

options：一个可选的PositionOptions 对象
    PositionOptions.timeout 表明的是设备必须在多长时间（单位毫秒）内返回一个位置
*/


/* === PositionError 接口表示当定位设备位置时发生错误的原因
PositionError.code
  1：该页面没有获取地理位置信息的权限
  2：地理位置获取失败，因为至少有一个内部位置源返回一个内部错误
  3: 获取地理位置超时

PositionError.message 开发者自定义的信息
*/
```

## navigator.geolocation.watchPosition(success[, error[, options]])
用于注册监听器，在设备的地理位置发生改变的时候自动被调用。也可以选择特定的错误处理函数, 参数特征与`navigator.geolocation.getCurrentPosition` 一致


## navigator.geolocation.clearWatch(id);
移除的对应的 Geolocation.watchPosition()监听器