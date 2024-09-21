// ===
// Detail: in an array, the item is object, average item's property
// Example：[{foo: 1}, {foo: 2}, {foo: 3}] 'foo' => 2
//          [{foo: 1}, {foo: 2}, {foo: 3}] o => o.foo => 2
// Tags:
// Expertise:
// ===

type FnOrProp = string | ((arg: any) => any)

// Solution1:
function avgArrItems(arr: any[], fnOrProp: FnOrProp): number {
  return arr
    .map(typeof fnOrProp === 'function'
      ? fnOrProp
      : o => o[fnOrProp])
    .reduce((prev, v) => prev + v)
    / arr.length
}


// test
let arr = [{ foo: 1 }, { foo: 2 }, { foo: 3 }]
console.log(avgArrItems(arr, 'foo')) // => 2
console.log(avgArrItems(arr, o => o.foo)) // => 2