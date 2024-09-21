function fun(n, o) {
  console.log(o);
  return {
    fun(m) {
      return fun(m, n);
    }
  };
}

var a = fun(0); // -> undefined   return {fun(m)} n=0
a.fun(1); // fun(1, 0) -> 0  {fun(m)}
a.fun(2); // fun(2, 0) -> 0  {fun(m)}
a.fun(3); // fun(3, 0) -> 0  {fun(m)}

console.log('---------------------');
// ----------
// -> undefined   return {fun(m)}   n=0
// fun(1, 0) -> 0 return  {fun(m)}    n=1
// fun(2, 1) -> 1 return  {fun(m)}    n=2
// fun(3, 2) -> 2 return  {fun(m)}    n=3
// ..
var b = fun(0)
  .fun(1)
  .fun(2)
  .fun(3);

console.log('---------------------');
// ----------
// -> undefined   return {fun(m)}   n=0
// fun(1, 0) -> 0 return  {fun(m)}    n=1
// fun(2, 1) -> 1 return  {fun(m)}    n=1
// fun(3, 1) -> 1 return  {fun(m)}    n=1
// ..
var c = fun(0).fun(1);
c.fun(2);
c.fun(3);

// ======
(function() {
  var a = (b = 3);
  /*  
  相等于
  b=3;
  var a=b;
  */
})();
a; // undefined 严格模式下报ReferenceError
b; // 3
