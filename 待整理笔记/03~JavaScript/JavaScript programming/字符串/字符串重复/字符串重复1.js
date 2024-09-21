function repeatStringNumTimes(str, num) {
  let result = [];
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return str;
}
let result = repeatStringNumTimes('hello', 3);
console.log(result);
