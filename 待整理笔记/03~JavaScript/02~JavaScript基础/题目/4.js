function foo(something) {
  this.a = something
}

var obj1 = {
  foo: foo
}

var obj2 = {}

obj1.foo(2)

console.log(obj1.a) // 2 ,此时的 this 上下文还在 obj1内,若是 obj1.foo 先保存当做引用再执行传参,则上下文为 window

obj1.foo.call(obj2, 3) // 用 call 强行改变上下文为 obj2内
console.log(obj2.a) // 3

var bar = new obj1.foo(4) // 这里产生了一个实例
console.log(obj1.a) // 2
console.log(bar.a) // 4;  new的绑定比隐式和显式绑定优先级更高
