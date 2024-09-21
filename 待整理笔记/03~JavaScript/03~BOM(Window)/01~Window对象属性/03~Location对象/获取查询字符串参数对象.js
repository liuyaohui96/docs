function getQueryStrObj() {
  if (!location.search.length) return {};
  let queryStr = location.search.substring(1);
  let ret = {};
  queryStr.split('&').forEach(item => {
    let attr = decodeURIComponent(item.split('=')[0]);
    let value = decodeURIComponent(item.split('=')[1]);
    ret[attr] = value;
  });
  return ret;
}
