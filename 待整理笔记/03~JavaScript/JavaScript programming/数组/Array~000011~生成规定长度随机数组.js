/**
 * @description make a random array with specified length and range
 * @params {number} len
 * @params {Number} rangeStart
 * @params {Number} rangeEnd
 * @return {array}
 */

function makeArray(len, rangeStart, rangeEnd) {
  let arr = [];
  for (let i = 0; i < len; i++) {
    let item = Math.floor(
      Math.random() * (rangeEnd - rangeStart + 1) + rangeStart
    );
    arr.push(item);
  }
  return arr;
}

console.log(makeArray(10, 3, 5));
