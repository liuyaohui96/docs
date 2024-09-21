


# Flash 与 JS
Flash提供了ExternalInterface接口与JavaScript通信，ExternalInterface有两个方法，call和addCallback：
```JavaScript
ExternalInterface.addCallback("在js里可调用的flash方法名",flash内方法) //在flash中通过这个方法公开 在js中可调用的flash内的方法;
ExternalInterface.call("js方法",传给js的参数) //在flash里调用js里的方法
```

## JS 跨域获取数据
js跨域是指通过js在不同的域之间进行数据传输或通信
```JavaScript
// jsonp 跨域

// document.domain 跨域

// window.name 跨域
```

##　js method
```JavaScript
// The escape function is a property of the global object. 
// Special characters are encoded with the exception of: @*_+-./
escape(string);

//  evaluates JavaScript code represented as a string
eval(string);
eval('2+2'); // 4
// a string that could be affected by a malicious party
// a third-party code can see the scope in which eval() was invoked
// eval() is also slower than the alternatives
```