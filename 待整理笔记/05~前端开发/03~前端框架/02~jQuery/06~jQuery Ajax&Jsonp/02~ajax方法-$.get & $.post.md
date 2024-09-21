## ajax方法-$.get & $.post
1. $.get()
2. $.post()

## $.get()
向服务器发起get请求
```js
// data 发送到服务器的请求附加的数据
// 回调函数中的
  // data参数是响应返回的结果，
  // status 是 "success", "notmodified", "error", "timeout", or "parsererror"
  // xhr 包含XMLHttpRequest object
// dataType 是 "xml" "html"  "text" "script" "json" "jsonp"
$.get(URL[,data,function(data,status,xhr),dataType])

// === 例子
$.get("test.php", { name:"Donald", town:"Ducktown" });

$('button').click(function() {
  $.get('demo_test.asp', function(data, status) {
    alert('Data: ' + data + '\nStatus: ' + status);
  });
});
```

## $.post()
向服务器发起post请求
```js
// data 发送到服务器的请求附加的数据
// 回调函数中的
  // data参数是响应返回的结果，
  // status 是 "success", "notmodified", "error", "timeout", or "parsererror"
  // xhr 包含XMLHttpRequest object
// dataType 是 "xml" "html"  "text" "script" "json" "jsonp"
$.post(URL[,data,function(data,status,xhr),dataType])

// === 例子
$.post("test.php", { name:"Donald", town:"Ducktown" });

$('button').click(function() {
  $.post('demo_test.asp', function(data, status) {
    alert('Data: ' + data + '\nStatus: ' + status);
  });
});x
```