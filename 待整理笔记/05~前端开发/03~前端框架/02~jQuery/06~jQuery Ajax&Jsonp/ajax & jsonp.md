
## jQuery ajax
```js
$.ajax({
    type: ...,
    url:...,
    success:...,
    error: ...,
    data: ...
})

// jsonp
$.ajax({
    type: 'get',
    dataType: 'jsonp',
    jsonp: 'cb',
    // ...
})

// === 回调地狱的解决
$.ajax({})
  .done(function(){
    // ...
  })
  .fail(function)({
    // ...
  })
```