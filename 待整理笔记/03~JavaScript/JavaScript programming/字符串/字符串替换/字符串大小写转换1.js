//  首字母大写，其他字母小写
function changeCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, x => x.toUpperCase());
}
