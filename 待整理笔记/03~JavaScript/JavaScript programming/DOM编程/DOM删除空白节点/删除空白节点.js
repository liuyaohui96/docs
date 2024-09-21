let e = document.querySelector('#test')
console.log(e.childNodes.length) // 7

// 返回移除空白节点的节点数组
function removeSpaceNode(nodes) {
  let result = []
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue)) {
      continue
    }
    result.push(nodes[i])
  }
  return result
}

function removeSpaceNode2(parent) {
  let nodes = parent.childNodes
  // 删除数组或类数组元素的时候，必须倒序进行删除
  for (let i = nodes.length - 1; i >= 0; i--) {
    if (nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue))
      parent.removeChild(nodes[i])
  }
}

console.log(removeSpaceNode(e.childNodes))

removeSpaceNode2(e)
console.log(e.childNodes.length) // 3
