// ===
// Detail: compute minute
// Example：'2022-04-03 12:00:00' 10
//            => '2022-04-03 12:10:00'
// Tags: Date String Array
// Expertise: beginner
// ===

// Solution1:
function computeMinute(timeStr: string, n: number): string {
  let d = new Date(timeStr)
  d.setMinutes(d.getMinutes() + n)
  return d.toISOString().split('.')[0].replace('T', ' ')
}

// test ISO format
// 2022-04-02T23:03:24.791Z
console.log(new Date().toISOString())

// test
console.log(computeMinute('2022-04-03 12:00:00', 10)) // => 2022-04-03 04:10:00
console.log(computeMinute('2022-04-03 12:00:00', -10)) // => 2022-04-03 03:50:00