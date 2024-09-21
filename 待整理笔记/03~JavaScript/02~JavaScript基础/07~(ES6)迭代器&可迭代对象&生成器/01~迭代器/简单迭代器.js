function makeIterator(array) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < array.length
        ? { value: array[nextIndex++], done: false }
        : { done: true };
    }
  };
}

let it = makeIterator(['yo', 'ya']);

console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done); // true
