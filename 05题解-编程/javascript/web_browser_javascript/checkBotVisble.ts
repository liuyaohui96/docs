// ===
// Detail: check the bottom of the page is visable or not
// Example：
// Tags: Window, DOM
// Expertise: beginner
// ===

// Solution1:
function checkBotVisible(): boolean {
  return document.documentElement.clientHeight + window.scrollY
    >= document.documentElement.scrollHeight
}



// test
// test in html file
// window.addEventListener('scroll', function () {
//   console.log(`check bottom visible: ${checkBotVisible()}`)
// })