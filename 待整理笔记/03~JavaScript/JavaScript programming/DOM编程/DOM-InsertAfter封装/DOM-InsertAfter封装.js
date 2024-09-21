function insertAfter(newNode, node) {
  let parent = node.parentNode
  if (node === parent.lastChild) {
    parent.appendChild(newNode)
  } else {
    parent.insertBefore(newNode, node.nextSibling)
  }
}

// 创建带文本节点的函数，此前已经封装好
function createElementWithText(tagName, text) {
  let node = document.createElement(tagName)
  let textNode = document.createTextNode(text)
  node.appendChild(textNode)
  return node
}

let e1 = document.querySelector('#test1')
let e2 = document.querySelector('#test2')
let newNode1 = createElementWithText('div', 'liu')
let newNode2 = createElementWithText('div', 'yaohui')
insertAfter(newNode1, e1) // liiu 插入 #test1
insertAfter(newNode2, e2) // yaohui 插入 #test2
