let regex = /^-?\d+\.{1}\d+$|^-?[1-9][0-9]*$|^-?0$/;
console.log(regex.test('123')); // true
console.log(regex.test('12a')); // false
console.log(regex.test('-123')); // true
console.log(regex.test('-123.1')); // true
console.log(regex.test('0')); // true
