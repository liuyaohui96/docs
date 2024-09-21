// 把下划线命名转成大驼峰命名

function strToCamel(str) {
  return str.replace(/(^\w)|_(\w)/g, (m, $1, $2) =>
    $1 ? $1.toUpperCase() : $2.toUpperCase()
  );
}

console.log(strToCamel('a_bc_def'));
