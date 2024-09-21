## $.ajax
```js
$.ajax({
    type: ...,
    url:...,
    success:...,
    error: ...,
    data: ...
})

// === 例子
$('button').click(function() {
  $.ajax({
    url: 'demo_test.txt',
    success: function(result) {
      $('#div1').html(result);
    }
  });
});
```