// ===
// Detail: simple compute date
// Example：'2022-03-15' 10 => '2022-03-25'
//          '2022-03-15' -10 => '2022-03-05'
// Tags: Date, String
// Expertise: beginner
// ===

// Solution1:
function computeDate(dateStr: string, n: number): string {
  let d = new Date(dateStr)
  d.setDate(d.getDate() + n)
  return d.toISOString().split('T')[0]
}


// test ISO format
// 2022-04-02T23:03:24.791Z
console.log(new Date().toISOString())

// test
console.log(computeDate('2022-03-15', 10)) // => 2022-03-25
console.log(computeDate('2022-03-15', -10)) // => 2022-03-05