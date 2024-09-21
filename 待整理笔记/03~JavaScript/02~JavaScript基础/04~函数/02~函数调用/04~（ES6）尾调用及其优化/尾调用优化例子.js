function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    // not optimized - must multiply after returning
    return n * factorial(n - 1);
  }
}

// === 进行尾调用优化
function factorial(n, p = 1) {
  if (n <= 1) {
    return 1 * p;
  } else {
    let result = n * p;

    // optimized
    return factorial(n - 1, result);
  }
}
