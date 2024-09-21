function sayHi() {
  return (() => 0)(); // IIFE 返回0
}

typeof sayHi(); // 'number'
