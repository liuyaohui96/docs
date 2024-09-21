function myToUppercase(str) {
  return str.replace(
    /\w*\S/g,
    text => text.slice(0, 1).toUpperCase() + text.slice(1)
  );
}

function myToUppercase(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(myToUppercase("hello world"));
