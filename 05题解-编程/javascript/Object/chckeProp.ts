// ===
// Detail: According to the predicate function ,to checkProp
// Example： l => l===3, 'length' => fn  => fn([1, 2, 3]) => true
// Tags: Object, property check, Function
// Expertise: intermediate
// ===

// Solution1:
type PredicateFn = (...arg: any[]) => boolean
type ReturnFn = (obj: Object) => boolean
function checkProp(predicateFn: PredicateFn, prop: string): ReturnFn {
  return obj => predicateFn(obj[prop])
}

[].map
// test
let check = checkProp(l => l === 3, 'length')
console.log(check([1, 2, 3])) // => true

check = checkProp(p => p === 'liuyaohui', 'name')
console.log(check({ name: 'liuyaohui' })) // => true
