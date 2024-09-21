/**
 * @description check if the number in specified range is three water flower
 * @param {number} rangeStart
 * @param {number} rangeEnd
 */

function threeWaterFlower(rangeStart, rangeEnd) {
  let rt = [];
  for (let i = rangeStart; i <= rangeEnd; i++) {
    let numStr = i.toString().split('');
    Math.pow(numStr[0], 3) + Math.pow(numStr[1], 3) + Math.pow(numStr[2], 3) ==
    i
      ? rt.push(i)
      : '';
  }
  return rt;
}

console.log(threeWaterFlower(100, 999));
