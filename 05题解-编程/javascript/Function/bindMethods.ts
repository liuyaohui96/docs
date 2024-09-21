// ===
// Detail: the implement of binding methods to specified obj
// Example：const obj = {foo: 'hello', click: function(){ return this.foo}}
//        bindMehods(obj, 'click')
//       document.body.addeventListner('click', obj.click)
//       => click return 'hello'
// Tags:
// Expertise:
// ===

// Solution1:
function bindMethods(obj: {}, ...fns: any[]) {
  fns.forEach(fn => {
    // to avoid obj[fn] call stack size exceeded
    let f = obj[fn]
    obj[fn] = function () {
      return f.apply(obj)
    }
  })
}

// use built-in bind
function bindMethods2(obj: {}, ...fns: any[]) {
  fns.forEach(fn => {
    obj[fn] = obj[fn].bind(obj)
  })
}

// test
// test in html file
const obj = {
  foo: 'hello',
  click: function () {
    console.log(this.foo)
  }
}

bindMethods(obj, 'click')

// click => 'hello'
document.body.addEventListener('click', obj.click) 