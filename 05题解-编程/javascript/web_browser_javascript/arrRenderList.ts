// ===
// Detail: array to make a list, and mount list to dom
// Example：['item1', 'item2'] #list => in dom, maybe
//   <ul id="list"
//     <li>item1</li>    
//     <li>item2</li>    
//    </ul>
// Tags: Array, DOM
// Expertise:
// ===

// Solution1:
function arrRenderList(arr: string[], selector: string): void {
  document.querySelector(selector).innerHTML = arr
    .map(item => `<li>${item}</li>`)
    .join('')
}

// test
/* === html file
<ul id="list">
</ul>
*/

arrRenderList(['hello', 'world'], '#list') // test ok in html file

