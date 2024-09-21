// === 
// Detail: crete function with specified arity(参数数量)
// Example：Math.max 2   => function with 2 arity
// Tags: Function, Array
// Expertise: intermediate
// ===

// Solution1:
function fnArity(fn: Function, arityNum: number): Function {
  return (...args) => fn(...args.slice(0, arityNum))
}


// test
const twoArgsInMax = fnArity(Math.max, 2)
const tesArr = [[2, 4, 6], [4, 5, 9]]
console.log(tesArr.map(v => twoArgsInMax(...v)))// => [4, 5]