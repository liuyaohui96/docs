function fn() {
  alert(a)
  var a = 200
  alert(a)
}

fn() // undefined / 200 ; 涉及变量提升
alert(a) // undefined
var a
alert(a) // undefined

var a = 300
alert(a) // 300
