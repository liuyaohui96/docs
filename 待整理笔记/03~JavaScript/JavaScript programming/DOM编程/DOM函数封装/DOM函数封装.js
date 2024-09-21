function $(selector) {
  let identify = selector[0] // 第一个字符作为标识符

  if (identify === '#') {
    // id获取
    return document.getElementById(selector.substring(1))
  }

  if (identify === '.') {
    // className
    return document.getElementsByClassName(selector.substring(1))
  }

  // tagName
  return document.getElementsByTagName(selector)
}
