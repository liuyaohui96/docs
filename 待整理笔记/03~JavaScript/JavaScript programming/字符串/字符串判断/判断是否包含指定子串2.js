function isContainString(arr) {
  return arr[1]
    .toLowerCase()
    .split('')
    .every(char => arr[0].toLowerCase().indexOf(char) !== -1);
}
let result = isContainString(['hello', 'hey']);
console.log(result); //false
