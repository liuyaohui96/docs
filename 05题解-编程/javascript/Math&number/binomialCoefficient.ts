// ===
// Detail: binomial coefficient(二项式系数)
// Example：2 8  => 28
// Tags: Math
// Expertise: advanced
// ===

// 二次项公式：k: (0 -> n) C(k, n)x^(n-k)y^k

// 二次项公式举例推理
// (a+b)^3 = (a+b)(a+b)(a+b)
// coefficient total is 3
// a^3 = each ()'s a*a*a  has C(3, 3) =1
// b^3 = each ()'s b*b*b has C(3, 3) =1
// a^2 = each ()'s a*a  has C(2, 3) = 3!/2!/(3-2)! = 3
// a = each ()'s a has C(1, 3) = 3!/1!/(3-1)！ = 3
// b^2 = each ()'s b*b has C(2, 3) = 3!/2!/(3-2)! = 3
// b = each ()'s b has C(1, 3) = 3!/1!/(3-1)！ = 3

// 二次项公式运用
// k=0 => C(0, 3)x^3y^0     C(0, 3)=> 3!/0!/3! = 1
// k=1 => C(1, 3)x&1y2      C(1, 3)=> 3!/1!/2! = 3
// k=2 => C(2, 3)x&2y1      C(2, 3)=> 3!/2!/1! = 3
// k=3 => C(3, 3)x^0y^3     C(3, 3)=> 3!/3!/0! = 1
// => (a+b)^3 = a^3 + b^3 + 3a^2b + 3ab^2


// 二次项系数 C(2, 8) = 8!/2!/6! = 56/2 = 28
// 二次项系数简化，避免多次使用阶乘
// C(k, n) = n!/n-k!/k!
// = n * n-1 * ... 1 / n-k* n-k-1 * 1 /k * k-1... *1
// = n* n-1 *... n-k+1(has k item) / k* k-1 ... * 1 (has k item)
// k =1  n/1
// k =2  n * n-1/ 1 * 2 = n/ 1 *  (n-1)/2
// k    n-k+1/k

// Solution1:
function binomialCoefficient(k: number, n: number): number {
  if (k === 0 || k === n) return 1
  if (k === 1 || k === n - 1) return n
  // 减少循环次数
  if (n - k < k) k = n - k

  let result = 1
  for (let i = 1; i <= k; i++) result *= (n - i + 1) / i

  return result
}


// test
console.log(binomialCoefficient(2, 8)) // 28
// C(3, 5) = 5!/ 3! / 2! =10 
console.log(binomialCoefficient(3, 5)) // 10
