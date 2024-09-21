// ===
// Detail: capitalize the string
// Example：'hello' => Hello | 'hello' false => 'Hello'
// Tags: string
// Expertise: beginner
// ===

// Solution1:
function capitalize([first, ...rest]: string, isRestUpper: boolean = true): string {
  return first.toUpperCase() +
    (isRestUpper
      ? rest.join('').toUpperCase()
      : rest.join(''))
}

function capitalize2(str: string, isRestUpper: boolean = true): string {
  return str[0].toUpperCase() +
    (isRestUpper
      ? str.slice(1).toUpperCase()
      : str.slice(1))
}



// test
console.log(capitalize('hello')) // => HELLO
console.log(capitalize('hello', false)) // => Hello

console.log(capitalize2('hello')) // => HELLO
console.log(capitalize2('hello', false)) // => Hello