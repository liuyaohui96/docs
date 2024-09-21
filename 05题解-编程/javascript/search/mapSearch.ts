// ===
// Detail: map search | 散列表search
// Example：'liuyaohui' => Map Search Result: 25
// Tags: Search
// Expertise: beginner
// ===

// Solution1:
function mapSearch(m: Map<string, number>, key: string): string {
  return 'Map Search Result: ' + m.get(key)
}


// test
let m = new Map()
m.set('liuyaohui', 25)
m.set('yaohuiliu', 30)
console.log(mapSearch(m, 'liuyaohui')) // => Map Search Result: 25
