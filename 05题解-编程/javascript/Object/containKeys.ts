// ===
// Detail: check if object contain some keys
// Example：{foo: 1, bar: 2, baz: 3} ['foo', 'bar'] => true
// Tags: Object, Array
// Expertise: beginner
// ===

// Solution1:
function containKeys(o: Object, keys: string[]): boolean {
  return keys.every(k => o.hasOwnProperty(k))
}


// test
console.log(containKeys({ foo: 1, bar: 2, baz: 3 }, ['foo', 'bar'])) // => true