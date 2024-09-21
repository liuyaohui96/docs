let original = new Map([[1, 'one']]);

let clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false
