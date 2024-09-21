// three methods to get max vaue of the array

let arr = [5, 3, 3, 9, 8];

console.log(Math.max(...arr));

console.log(Math.max.apply(null, arr));
console.log(arr.reduce((prev, next) => (prev > next ? prev : next)));
