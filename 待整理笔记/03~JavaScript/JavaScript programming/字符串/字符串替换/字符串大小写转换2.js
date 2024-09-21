//  首字母大写，其他字母小写
function changeCase(str) {
  let arr = str.toLowerCase().split(' ');
  let result = arr.map(x => x.replace(x.charAt(0), x.charAt(0).toUpperCase()));
  return result.join(' ');
}
