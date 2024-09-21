function createElementWithText(tagName, text) {
  let node = document.createElement(tagName)
  let textNode = document.createTextNode(text)
  node.appendChild(textNode)
  return node
}

let node = createElementWithText('div', 'hello')
console.log(node)
document.body.appendChild(node)
