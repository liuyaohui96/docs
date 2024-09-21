// ===
// Detail: find next weekend(Sat. & Sun.)
// Example：'2022-4-3' => '2022-4-9'
// Tags: Date
// Expertise: beginner
// ===

// Solution1:
function computeNextWeekend(dateStr: string): string {
  let date = new Date(dateStr)
  // Sunday - Saturday : 0 - 6
  let day = date.getDay()
  // for day: 0 + 6 & 1 + 5 & 2 + 4 & ...| 6 + 7
  let addDate = 0
  if (day === 6)
    addDate = 7
  else
    addDate = 6 - day
  date.setDate(date.getDate() + addDate)
  return date.toLocaleDateString().replace(/\//g, '-')
}


// test locale format
console.log(new Date().toLocaleDateString()) // => 2022/4/3

// test
console.log(computeNextWeekend('2022-4-3')) // => 2022-4-9
console.log(computeNextWeekend('2022-3-1')) // => 2022-3-5