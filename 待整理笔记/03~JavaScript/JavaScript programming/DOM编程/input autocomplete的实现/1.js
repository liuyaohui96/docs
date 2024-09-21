let arr = ['广州', '深圳', '上海', '北京', '广东']

const e = document.querySelector('#test')

e.addEventListener('input', function() {
  // 清除上一次列表
  clearList()

  let targetStr = this.value
  if (!targetStr) return // 空字符串退出处理
  const strArr = arr.filter(item => item.includes(targetStr))

  strArr.forEach(item => {
    // 计算字符串的起始位置，用于突出显示
    let startIdx = item.indexOf(targetStr)
    endIdx = startIdx + targetStr.length

    // 创建元素承载显示的内容
    const ele = document.createElement('div')
    ele.setAttribute('class', 'list') // 增加类标志符
    ele.innerHTML = `${item.substring(
      0,
      startIdx
    )}<strong style="color: red;">${item.substring(
      startIdx,
      endIdx
    )}</strong>${item.substring(endIdx)}<input type="hidden" value="${item}">`

    // 为每一个元素添加鼠标单击事件
    ele.addEventListener('click', function() {
      e.value = this.getElementsByTagName('input')[0].value
    })

    // 增加到父元素中
    e.parentNode.appendChild(ele)
  })
})

function clearList(eve) {
  let list = document.querySelectorAll('.list')
  // 删除所有list类的元素
  list.forEach(item => {
    item.parentNode.removeChild(item)
  })
}

// 除了输入框，其他地方单击，清除列表
document.addEventListener('click', function(eve) {
  if (eve.target === e) return
  clearList()
})
