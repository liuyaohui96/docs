function isContainString(arr) {
  let firstString = arr[0].toLowerCase();
  let secondString = arr[1].toLowerCase();

  for (let i = 0; i < secondString.length; i++) {
    if (firstString.indexOf(secondString[i]) == -1) return false;
  }
  return true;
}
let result = isContainString(['hello', 'hey']);
console.log(result); //false
