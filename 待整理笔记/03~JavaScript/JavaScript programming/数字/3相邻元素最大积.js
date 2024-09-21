function adjacentElementsProduct(inputArray) {
  let maxProduct = inputArray[0] * inputArray[1]
  for (let i = 1; i < inputArray.length - 1; i++) {
    let product = inputArray[i] * inputArray[i + 1]
    if (product > maxProduct) maxProduct = product
  }
  return maxProduct
}

function adjacentElementsProduct2(arr) {
  return Math.max(...arr.slice(1).map((item, index) => item * arr[index]))
}

let arr = [3, 6, -2, -5, 7, 3]
console.log(adjacentElementsProduct(arr)) // 21
console.log(adjacentElementsProduct2(arr)) // 21
