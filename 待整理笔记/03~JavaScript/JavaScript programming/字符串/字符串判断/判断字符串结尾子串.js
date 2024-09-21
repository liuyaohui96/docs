function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}
let result = confirmEnding('hello wrold', 'ld');
console.log(result); // true
