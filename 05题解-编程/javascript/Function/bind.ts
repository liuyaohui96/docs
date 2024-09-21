// ===
// Detail: the implement of bind
// Example：(x, y) => this.x +y +z {x:1} 2 => return the bound function
//          invoke the bound function & pass argument 3 => 6
// Tags: Function
// Expertise: intermidate
// ===

// Solution1:
type Fn = (...args: any[]) => any
function bind(fn: Fn, thisArg: {}, ...boundArgs: any[]): Fn {
  return (...args: any[]) =>
    fn.apply(thisArg, [...boundArgs, ...args])
}


function bind2(fn: Fn, thisArg: {}, ...boundArgs: any[]): Fn {
  return (...args: any[]) =>
    fn.call(thisArg, ...boundArgs, ...args)
}



// test
function sum(y, z) {
  return this.x + y + z
}
const sumBound = bind(sum, { x: 1 }, 2)
console.log(sumBound(3)) // => 6

const sumBound2 = bind2(sum, { x: 1 }, 2)
console.log(sumBound2(3)) // => 6