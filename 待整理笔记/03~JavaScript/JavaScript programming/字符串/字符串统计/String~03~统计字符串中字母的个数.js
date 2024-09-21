/**
 * @description return the count of each char
 * @param {string} str
 * @return {objet} obj
 */

function countChar(str) {
  if (str.length < 1) return -1;
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let attr = str[i];
    if (obj[attr] && obj[attr].value == attr) {
      obj[attr].count++;
    } else {
      obj[attr] = {
        count: 1,
        value: attr
      };
    }
  }

  for (let key in obj) {
    console.log(obj[key].value, obj[key].count);
  }
}

countChar('aaaabbbbcccdeff');
