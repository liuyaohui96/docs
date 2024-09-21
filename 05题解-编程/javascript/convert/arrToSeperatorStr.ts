// ===
// Detail: array to comma-seperated string
// Example：[['a', 'b'], ['c', 'd']] => a, b/n c, d
// Tags: Array, String
// Expertise: advanced
// ===

Solution1:
/*
e.g ['a', 'b', ['c', 'd', ['e']]]
['c', 'd', ['e']] is an array => ['a', 'b', wait...] ①
['e'] is an array => ['c', 'd', wait...] ②
['e'] => ['e'] => join
['c', 'd', 'e'] ② => join => 'c, d, e'
['a', 'b', 'c, d, e'] ① => join
*/
function arrToSeperatorStr(arr: any[], seperator = '\n'): string {
  return arr
    .map(v => Array.isArray(v) ? arrToSeperatorStr(v, ',') : v)
    .join(seperator)
}


// tests
console.log(arrToSeperatorStr(['a', 'b', ['c', 'd', ['e']]]))
// => a/nb/nc,d,e/n

console.log(arrToSeperatorStr([['a', 'b'], ['c', 'd']]))
// a,b/nc,d/n