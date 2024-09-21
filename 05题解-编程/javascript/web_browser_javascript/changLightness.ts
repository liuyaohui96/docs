// ===
// Detail: changeLightness
// Example：'hsl(100, 50%, 50%)', 10 => hsl(100, 50%, 60%)
// Tags: element, style
// Expertise: beginner
// ===

// Solution1:
function changeLightness(hslStr: string, l: number): string {
  let [hue, saturation, lightnesss] = hslStr.match(/\d+/g).map(Number)
  lightnesss += l
  if (lightnesss < 0) lightnesss = 0
  if (lightnesss > 100) lightnesss = 100

  return `hsl(${hue}, ${saturation}%, ${lightnesss}%)`
}


// test
console.log(changeLightness('hsl(100, 50%, 50%)', 10)) // => hsl(100, 50%, 60%)
console.log(changeLightness('hsl(100, 50%, 50%)', -10)) // => hsl(100, 50%, 60%)